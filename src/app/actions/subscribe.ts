"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "Concept Renovation Prestige <contact@infocrp.com>";
const WELCOME_TEMPLATE_ID = "welcome-email";

const SubscribeSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prenom doit avoir au moins 2 caracteres")
    .max(50)
    .trim(),
  lastName: z
    .string()
    .min(2, "Le nom doit avoir au moins 2 caracteres")
    .max(50)
    .trim(),
  email: z.string().email("Format d'email invalide").toLowerCase().trim(),
});

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_CONFIG = { maxAttempts: 5, windowMs: 60 * 60 * 1000 };

async function getClientIp(): Promise<string> {
  const headersList = await headers();
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
      message: "Trop de tentatives. Reessayez plus tard.",
    };
  }

  record.count++;
  return { allowed: true };
}

export async function subscribeUser(formData: FormData) {
  try {
    if (formData.get("hp_email_verification")) {
      // console.warn("[SECURITY] Honeypot triggered.");
      return { success: true, message: "Merci! Vous etes maintenant abonne." };
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
      // console.error("[RESEND] Missing RESEND_API_KEY or RESEND_AUDIENCE_ID.");
      return { error: "Configuration courriel manquante sur le serveur." };
    }

    const ip = await getClientIp();
    const limit = checkRateLimit(ip);
    if (!limit.allowed) return { error: limit.message };

    const rawData = Object.fromEntries(formData.entries());
    const validated = SubscribeSchema.safeParse(rawData);

    if (!validated.success) {
      return { error: validated.error.issues[0].message };
    }

    const { firstName, lastName, email } = validated.data;

    const contactResponse = await resend.contacts.create({
      email,
      firstName,
      lastName,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    if (contactResponse.error) {
      if (contactResponse.error.message.toLowerCase().includes("exists")) {
        return { error: "Cet e-mail est deja inscrit." };
      }

      // console.error("Resend Contact Error:", contactResponse.error);
      return { error: "Erreur lors de l'inscription. Reessayez plus tard." };
    }

    const emailResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Bienvenue chez Concept Renovation Prestige!",
      template: {
        id: "welcome-email",
        variables: { first_name: firstName, last_name: lastName },
      },
    });

    if (emailResponse.error) {
      // console.error("Resend Email Error:", emailResponse.error);
      return {
        error:
          "Votre inscription a ete ajoutee, mais le courriel de bienvenue n'a pas pu etre envoye.",
      };
    }

    // console.log(`[SUCCESS] Subscribed: ${email} from IP: ${ip}`);
    return { success: true, message: "Merci! Vous etes maintenant abonne." };
  } catch (error) {
    // console.error("[CRITICAL] Action Error:", error);
    return { error: "Une erreur est survenue sur le serveur." };
  }
}

export async function cleanupRateLimit(): Promise<void> {
  const now = Date.now();
  let cleaned = 0;

  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
      cleaned++;
    }
  }

  if (cleaned > 0) {
    // console.log(`[CLEANUP] Removed ${cleaned} expired IP records.`);
  }
}
