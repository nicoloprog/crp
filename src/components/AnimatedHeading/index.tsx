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

const AnimatedHeading = ({
  markers,
  children,
  id,
  nbColorWords = 0,
  ...rest
}: AnimatedHeadingProps) => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ourText = new SplitType(`#${id}`, {
      types: "words",
    });

    const words = document.querySelectorAll(`#${id} > .word`);
    words.forEach((word, index) => {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-flex";
      if (index > words.length - nbColorWords - 1) {
        wrapper.style.color = "rgba(36, 138, 255, 1)";
      }
      word.parentNode?.insertBefore(wrapper, word);
      wrapper.appendChild(word);
    });

    gsap.fromTo(
      ourText.words,
      {
        y: "150%",
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
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 0.3,
        ease: "ease",
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
    <Heading id={id} lineHeight={"75%"} ref={ref} {...rest}>
      {children}
    </Heading>
  );
};

export default AnimatedHeading;
