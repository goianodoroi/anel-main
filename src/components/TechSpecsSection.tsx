"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SPEC_GROUPS = [
  {
    id: "sensors",
    name: "Sensors",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    items: [
      "Red and infrared LEDs measure blood oxygen levels",
      "Green and infrared LEDs alternate to measure heart rate and heart rate variability 24/7 and respiration rate",
      "Digital sensor measures temperature trends",
      "Accelerometer tracks movement and activity 24/7",
    ],
  },
  {
    id: "compatibility",
    name: "Compatibility",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    items: [
      "Oura App is available in English, Finnish, Japanese, German, French, Spanish, Italian, Norwegian, Swedish, Czech, Dutch, and Danish",
      "Supports metric and imperial units of measurement",
      "Integrates with 40+ apps",
      "Available on iOS and Android",
    ],
  },
  {
    id: "dimensions",
    name: "Weight and Dimensions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    items: [
      "Width: 7.90mm",
      "Thickness: 2.88mm",
      "Weight: 3.3 to 5.2 grams (depending on Oura Ring size)",
    ],
  },
  {
    id: "battery",
    name: "Battery Life",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="18" height="11" rx="2" ry="2"/><path d="M22 11v3"/>
      </svg>
    ),
    items: [
      "5-8 days of battery life*",
      "Typically charges in 20-80 minutes, depending on battery level",
    ],
  },
  {
    id: "materials",
    name: "Quality Materials",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
    items: [
      "Non-allergenic titanium on inner & outer surfaces",
      "Seamless titanium interior",
      "Water resistant up to 100m/328 ft",
      "Minor scratches from regular wear are normal",
    ],
  },
  {
    id: "connectivity",
    name: "Connectivity",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
    items: [
      "Bluetooth Low Energy",
      "Automatic firmware updates via Oura App",
      "EMF-safe",
      "Supports airplane mode",
      "FCC-certified",
    ],
  },
];

const INCLUDED = [
  "Oura Ring 4",
  "Size-specific charger",
  "USB-C cable",
];

const CHARGER_IMG =
  "https://ourahealth.imgix.net/product/pdp/pdp-tech-specs-or4-charger.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=a01b65893e0dd892d34029b0aa0f4ab1";

export default function TechSpecsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-10 w-full overflow-hidden rounded-b-[38px] px-5 md:px-8"
      style={{ background: "#87827c" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-0 md:gap-12 items-start">

          {/* Left — image + included */}
          <div
            className={`flex flex-col gap-8 pb-16 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[6px]"
            }`}
          >
            {/* Charger image — flush to top, no padding above */}
            <div className="relative w-full max-w-[420px] mx-auto aspect-square -mt-0">
              <Image
                src={CHARGER_IMG}
                alt="Oura Ring 4 charger"
                fill
                className="object-contain object-top"
              />
            </div>

            {/* Title — mobile only, below image, centered */}
            <h2
              className="md:hidden font-normal leading-tight tracking-[-0.04em] text-center"
              style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "rgba(255,255,255,0.9)" }}
            >
              Tech Specifications
            </h2>

            {/* What's Included */}
            <div
              className="rounded-[22px] p-6"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 8.5 12 13 3 8.5" />
                  <path d="M3.5 8 12 3.75 20.5 8" />
                  <path d="M3.5 8v8L12 20.25 20.5 16V8" />
                  <path d="M12 13v7.25" />
                </svg>
                <span className="text-sm font-medium tracking-[-0.01em]" style={{ color: "rgba(255,255,255,0.9)" }}>
                  What&apos;s Included
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — specs */}
          <div
            className={`flex flex-col gap-2 pt-0 md:pt-20 pb-16 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[6px]"
            }`}
            style={{ transitionDelay: "80ms" }}
          >
            {/* Title — desktop */}
            <h2
              className="hidden md:block font-normal leading-tight tracking-[-0.04em] mb-8"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)", color: "rgba(255,255,255,0.9)" }}
            >
              Tech Specifications
            </h2>

            {/* Spec grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {SPEC_GROUPS.map((group, gi) => (
                <div
                  key={group.id}
                  className={`flex flex-col gap-2 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-5 blur-[5px]"
                  }`}
                  style={{ transitionDelay: `${150 + gi * 60}ms` }}
                >
                  <div className="flex items-center gap-2 mb-1" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {group.icon}
                    <span className="text-sm font-medium tracking-[-0.01em]">{group.name}</span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-[0.8rem] leading-snug" style={{ color: "rgba(255,255,255,0.52)" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p
              className={`text-[11px] mt-4 transition-all duration-700 ease-out ${
                isVisible ? "opacity-40" : "opacity-0"
              }`}
              style={{ color: "rgba(255,255,255,0.9)", transitionDelay: "600ms" }}
            >
              * Battery life estimate varies by ring size and usage patterns.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
