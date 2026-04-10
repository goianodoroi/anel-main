"use client";

import { useEffect, useRef, useState } from "react";

export default function ScienceOfSelfCareSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-5 pt-10 pb-20 md:px-8 md:pt-24 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 h-[320px] blur-3xl md:top-20 md:h-[380px]"
      >
        <div className="absolute left-[8%] top-[18%] h-28 w-44 rounded-full bg-[rgba(210,190,165,0.26)] md:h-44 md:w-72" />
        <div className="absolute right-[12%] top-[8%] h-32 w-48 rounded-full bg-[rgba(188,202,220,0.22)] md:h-44 md:w-72" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[16%] h-[260px] w-[260px] rounded-full blur-[90px] md:right-[10%] md:top-[18%] md:h-[420px] md:w-[420px]"
        style={{ background: "rgba(220, 233, 236, 0.9)" }}
      />

      <div className="relative mx-auto max-w-[1280px] md:grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,0.92fr)] md:items-center md:gap-14 lg:gap-18">
        <div className="mb-8 text-center md:hidden">
          <h2
            className={`mx-auto max-w-[10ch] text-[2.8rem] leading-[0.93] tracking-[-0.055em] text-[var(--oura-ink)] transition-all duration-900 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-6 opacity-0 blur-[7px]"
            }`}
          >
            The science of{" "}
            <span
              className="not-italic"
              style={{
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              self-care
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-[34rem] text-base leading-relaxed tracking-[-0.012em] text-[var(--oura-mute)] transition-all delay-150 duration-900 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-8 opacity-0 blur-[6px]"
            }`}
          >
            Oura Ring is built for 24/7 comfort with 5-8 days of battery life.* Smart
            Sensing technology adapts to your finger to deliver highly accurate,
            continuous data.
          </p>
        </div>

        <div className="hidden md:block md:pr-4">
          <h2
            className={`max-w-[10ch] text-[5rem] leading-[0.93] tracking-[-0.055em] text-[var(--oura-ink)] transition-all duration-900 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-6 opacity-0 blur-[7px]"
            }`}
          >
            The science of{" "}
            <span
              className="not-italic"
              style={{
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
                fontWeight: 700,
              }}
            >
              self-care
            </span>
          </h2>

          <p
            className={`mt-8 max-w-[34rem] text-[1.15rem] leading-relaxed tracking-[-0.012em] text-[var(--oura-mute)] transition-all delay-150 duration-900 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-8 opacity-0 blur-[6px]"
            }`}
          >
            Oura Ring is built for 24/7 comfort with 5-8 days of battery life.* Smart
            Sensing technology adapts to your finger to deliver highly accurate,
            continuous data.
          </p>
        </div>

        <div
          className={`relative overflow-hidden rounded-[28px] bg-[rgba(255,255,255,0.26)] shadow-[0_22px_70px_rgba(92,74,49,0.08)] ring-1 ring-[rgba(120,101,78,0.08)] transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-8 opacity-0 blur-[10px]"
          }`}
        >
          <div className="relative aspect-[1.02/1] min-h-[420px] md:min-h-[620px] lg:min-h-[640px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source
                src="https://ourahealth.imgix.net/jade-pop/or4-xray.mp4?ixlib=js-3.8.0&fm=mp4&res=high&s=922aaf14f5bda51d0c8fce06b3ddb662"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(250,244,237,0.2),transparent_30%),linear-gradient(180deg,rgba(28,27,26,0.08),rgba(28,27,26,0.26))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
