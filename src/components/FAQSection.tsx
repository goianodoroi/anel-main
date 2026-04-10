"use client";

import { useEffect, useRef, useState } from "react";

const FAQS = [
  {
    q: "How accurate is the Oura Ring?",
    a: "Oura Ring uses clinical-grade sensor technology validated across multiple peer-reviewed studies. Its sleep staging achieves accuracy comparable to polysomnography, and heart rate readings stay within ±2 bpm of medical-grade ECG devices under most conditions. Oura has also partnered with leading research institutions worldwide to continuously improve accuracy.",
  },
  {
    q: "What's the difference between Oura Ring 4 and Oura Ring 4 Ceramic?",
    a: "Oura Ring 4 is crafted from full titanium — the lightest smart ring ever made. Oura Ring 4 Ceramic features the same titanium core and sensors, but with a premium scratch-resistant ceramic exterior for a timeless, refined finish. Both offer identical health tracking capabilities. The Ceramic edition is available in four exclusive colorways and select sizes.",
  },
  {
    q: "How do I take care of my Oura Ring 4?",
    a: "Rinse your Oura Ring with fresh water after exposure to salt water, chlorine, or sweat. Avoid abrasive cleaners. For the Ceramic edition, minor surface scuffs from regular wear are normal and do not affect performance. Clean with a soft, lint-free cloth and mild soap if needed.",
  },
  {
    q: "Can I have multiple rings under the same account?",
    a: "Yes. You can pair and use multiple Oura Rings on a single account, though only one ring can actively sync data at a time. Switching between rings is easy through the Oura app settings.",
  },
  {
    q: "Can I wear Oura Ring in pools, saunas, or ice baths?",
    a: "Yes. Oura Ring 4 is water resistant to 100 meters (328 feet), making it safe for swimming, showering, hot tubs, saunas, and ice baths. Extreme temperature fluctuations may temporarily affect sensor readings but will not damage the ring.",
  },
  {
    q: "Can I use Oura Ring without a subscription?",
    a: "Your ring purchase includes the first month of Oura membership free. After that, an active membership is required to access your full health insights, trends, and personalized guidance. Without membership, the ring continues to collect data — you'll just need a membership to unlock the analysis and scores.",
  },
  {
    q: "What does Oura Ring 4 actually track?",
    a: "Oura Ring 4 continuously monitors heart rate, heart rate variability (HRV), blood oxygen levels (SpO2), body temperature trends, respiration rate, and movement. It synthesizes this data into three daily scores — Sleep, Activity, and Readiness — plus stress monitoring, cardiovascular age, and women's health cycle insights.",
  },
  {
    q: "How do I find my correct ring size?",
    a: "Order a free sizing kit before purchasing. It ships quickly and includes plastic sizing bands in all available sizes. Ring sizing often differs from standard jewelry sizes, so we recommend wearing a sizing band for at least 24 hours — including during sleep — to confirm the perfect fit.",
  },
];

function FAQItem({
  q,
  a,
  idx,
  isVisible,
}: {
  q: string;
  a: string;
  idx: number;
  isVisible: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-[18px] overflow-hidden transition-all ease-out ${
        isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-5 blur-[5px]"
      }`}
      style={{
        background: "var(--oura-soft)",
        transitionDuration: "650ms",
        transitionDelay: `${idx * 50}ms`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
      >
        <span className="text-[var(--oura-ink)] text-[0.93rem] md:text-[0.97rem] tracking-[-0.02em] leading-snug pr-6 font-normal">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-[var(--oura-ink)] border-[var(--oura-ink)] rotate-45"
              : "border-[var(--oura-line)] group-hover:border-[var(--oura-slate)]"
          }`}
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 10 10"
            fill="none"
            stroke={open ? "var(--oura-cream)" : "var(--oura-ink)"}
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            <line x1="5" y1="1" x2="5" y2="9" />
            <line x1="1" y1="5" x2="9" y2="5" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: open ? "320px" : "0px" }}
      >
        <p className="text-[var(--oura-mute)] text-sm leading-relaxed tracking-[-0.01em] px-6 pb-6 pr-14">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[var(--oura-cream)] py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-[860px] mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-5 blur-[6px]"
          }`}
        >
          <h2
            className="text-[var(--oura-ink)] font-normal leading-[1.05] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {FAQS.map((item, i) => (
            <FAQItem key={i} {...item} idx={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
