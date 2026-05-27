"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================
// VALIDATION SCHEMA
// ============================================
// Removed captchaAnswer because we are now using Time-Based + Honeypot logic
const SubscribeSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit avoir au moins 2 caractères")
    .max(50)
    .trim(),
  lastName: z
    .string()
    .min(2, "Le nom doit avoir au moins 2 caractères")
    .max(50)
    .trim(),
  email: z.string().email("Format d'email invalide").toLowerCase().trim(),
});

// ============================================
// RATE LIMITING (In-Memory)
// ============================================
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_CONFIG = { maxAttempts: 5, windowMs: 60 * 60 * 1000 };

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  // Standard header for Vercel/Cloudflare; fallback to unknown
  return headersList.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    });
    return { allowed: true };
  }

  if (record.count >= RATE_LIMIT_CONFIG.maxAttempts) {
    return {
      allowed: false,
      message: "Trop de tentatives. Réessayez plus tard.",
    };
  }

  record.count++;
  return { allowed: true };
}

// ============================================
// MAIN SUBSCRIBE ACTION
// ============================================
export async function subscribeUser(formData: FormData) {
  try {
    // 1. LAYER 1: HONEYPOT CHECK
    // If 'hp_email_verification' is filled, it's almost certainly a bot.
    if (formData.get("hp_email_verification")) {
      console.warn("[SECURITY] Honeypot triggered.");
      // We return success to the bot so it doesn't try other methods,
      // but we don't actually process the data.
      return { success: true, message: "Merci! Vous êtes maintenant abonné." };
    }

    // 2. LAYER 2: IP RATE LIMITING
    const ip = await getClientIp();
    const limit = checkRateLimit(ip);
    if (!limit.allowed) return { error: limit.message };

    // 3. LAYER 3: VALIDATION
    const rawData = Object.fromEntries(formData.entries());
    const validated = SubscribeSchema.safeParse(rawData);

    if (!validated.success) {
      return { error: validated.error.issues[0].message };
    }

    const { firstName, lastName, email } = validated.data;

    // 4. RESEND CONTACT CREATION
    const contactResponse = await resend.contacts.create({
      email,
      firstName,
      lastName,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    if (contactResponse.error) {
      // Handle the "Contact already exists" case specifically
      if (contactResponse.error.message.toLowerCase().includes("exists")) {
        return { error: "Cet e-mail est déjà inscrit." };
      }
      console.error("Resend Error:", contactResponse.error);
      return { error: "Erreur lors de l'inscription. Réessayez plus tard." };
    }

    // 5. WELCOME EMAIL (Non-blocking / Fire-and-forget)
    resend.emails
      .send({
        from: "Concept Rénovation Prestige <contact@infocrp.com>",
        to: email,
        subject: "Bienvenue chez Concept Rénovation Prestige!",
        template: {
          id: "welcome-email",
          variables: { first_name: firstName, last_name: lastName },
        },
      })
      .catch((e) => console.error("Async Email Error:", e));

    console.log(`[SUCCESS] Subscribed: ${email} from IP: ${ip}`);
    return { success: true, message: "Merci! Vous êtes maintenant abonné." };
  } catch (error) {
    console.error("[CRITICAL] Action Error:", error);
    return { error: "Une erreur est survenue sur le serveur." };
  }
}

// ============================================
// CLEANUP (Async for Next.js 16 compliance)
// ============================================
export async function cleanupRateLimit(): Promise<void> {
  const now = Date.now();
  let cleaned = 0;
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
      cleaned++;
    }
  }
  if (cleaned > 0)
    console.log(`[CLEANUP] Removed ${cleaned} expired IP records.`);
}
