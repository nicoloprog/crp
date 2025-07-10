"use client";

import { Heading, HeadingProps } from "@chakra-ui/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

interface AnimatedHeadingProps extends HeadingProps {
  markers?: boolean;
  nbColorWords?: number;
}

const AnimatedTitle = ({
  markers,
  children,
  id,
  ...rest
}: AnimatedHeadingProps) => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ourText = new SplitType(`#${id}`, {
      types: "chars",
    });

    const chars = document.querySelectorAll(`#${id} > .word`);
    chars.forEach((char) => {
      const wrapper = document.createElement("span");
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "inline-flex";
      // if (index > chars.length - nbColorWords - 1) {
      //   wrapper.style.color = "rgba(36, 138, 255, 1)";
      // }
      char.parentNode?.insertBefore(wrapper, char);
      wrapper.appendChild(char);
    });

    gsap.fromTo(
      ourText.chars,
      {
        y: "25%",
        x: "150%",
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ref.current,
          markers: markers,
          toggleActions: "play complete none reverse",
          start: "top bottom",
          end: "bottom top",
        },
        x: 0,
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 0.3,
        ease: "back",
      }
    );
    gsap.to(`#${id}`, {
      scrollTrigger: {
        trigger: `#${id}`,
        markers: markers,
        toggleActions: "play complete none reverse",
        start: "top bottom",
        end: "bottom top",
      },
      opacity: 1,
      duration: 0.3,
      ease: "back",
    });
  });

  return (
    <Heading id={id} lineHeight={"75%"} ref={ref} opacity={0} {...rest}>
      {children}
    </Heading>
  );
};

export default AnimatedTitle;
