import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CardComponent from "./Card";

export const ScrollSection = () => {
  const sectionref = useRef(null);
  const triggerRef = useRef(null);
  const progressBarRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const updateProgressBar = useCallback(() => {
    if (!sectionref.current) return;
    const scrollWidth = sectionref.current.scrollWidth - document.documentElement.clientWidth;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / scrollWidth) * 100;
    gsap.to(progressBarRef.current, {
      width: `${progress}%`,
      duration: 0.75,
      ease: "sine.out",
    });
  }, []);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionref.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "7200 top",
          scrub: 1.5,
          pin: true,
          onUpdate: updateProgressBar,
        },
      }
    );

    updateProgressBar();
    return () => {
      if (pin.scrollTrigger) {
        pin.scrollTrigger.kill();
      }
      pin.kill();
    };
  }, [updateProgressBar]);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          className="flex flex-row relative h-screen overflow-auto"
          style={{ width: "500vw" }}
          ref={sectionref}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <CardComponent
              key={index}
              title="Card Title"
              description="Card Description"
            />
          ))}
        </div>
      </div>
      <div
        ref={progressBarRef}
        id="progress-bar"
        className="fixed bottom-0 left-0 h-1 bg-brandOffwhite"
      />
    </section>
  );
};