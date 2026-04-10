"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Slide = {
  title: string;
  highlight: string;
  label: string;
  image: string;
  alt: string;
  icon: ReactNode;
};

const slides: Slide[] = [
  {
    title: "Get the best sleep of",
    highlight: "your life",
    label: "Sleep and Rest",
    image:
      "https://ourahealth.imgix.net/why-oura/oreo/slide-1-sleep.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=1920&s=7ac8d32cd5ae0c4667993de914b3abb7",
    alt: "Woman sleeping soundly while wearing an Oura ring",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5">
        <path
          d="M9.35462 0.470653C9.50015 0.674849 9.50956 0.946258 9.37851 1.16004C8.58337 2.45718 8.12484 3.98276 8.12484 5.61735C8.12484 9.66621 10.9425 13.0585 14.7247 13.9375C15.0609 14.0156 15.2701 14.3515 15.1919 14.6877C15.1138 15.0239 14.7779 15.2332 14.4417 15.155C10.106 14.1474 6.87484 10.2605 6.87484 5.61735C6.87484 4.28976 7.13935 3.023 7.61866 1.86766C4.49425 3.1376 2.2915 6.20413 2.2915 9.78401C2.2915 14.5014 6.11574 18.3257 10.8332 18.3257C13.9163 18.3257 16.6185 16.6926 18.1212 14.2413C18.3016 13.947 18.6864 13.8547 18.9807 14.0351C19.2749 14.2155 19.3673 14.6003 19.1869 14.8946C17.4665 17.7011 14.369 19.5757 10.8332 19.5757C5.42538 19.5757 1.0415 15.1918 1.0415 9.78401C1.0415 5.10448 4.32354 1.19298 8.71075 0.223135C8.9556 0.169011 9.20908 0.266457 9.35462 0.470653Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Don't just live longer,",
    highlight: "live healthier",
    label: "Wellness and Longevity",
    image:
      "https://ourahealth.imgix.net/why-oura/oreo/slide-4-wellness.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=1920&s=760684b0228cc48e27ca31c346475e84",
    alt: "Family of 3 generations together",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 21 20" className="h-5 w-5">
        <path
          d="M10.0125 20C8.81101 19.8665 7.61368 19.5202 6.42053 18.9612C5.22737 18.4022 4.15519 17.6262 3.204 16.6333C2.25282 15.6404 1.48102 14.4139 0.888611 12.9537C0.296204 11.4935 0 9.79558 0 7.85982V6.90864H0.951189C1.83563 6.90864 2.77847 7.07968 3.77972 7.42178C4.78098 7.76387 5.66542 8.20192 6.43304 8.73592C6.56654 7.23404 6.96704 5.68627 7.63454 4.09262C8.30204 2.49896 9.0947 1.13475 10.0125 0C10.9303 1.13475 11.723 2.49896 12.3905 4.09262C13.058 5.68627 13.4585 7.23404 13.592 8.73592C14.3596 8.23529 15.2441 7.80559 16.2453 7.44681C17.2466 7.08803 18.1894 6.90864 19.0738 6.90864H20.025V7.85982C20.025 9.79558 19.7288 11.4935 19.1364 12.9537C18.544 14.4139 17.7722 15.6404 16.821 16.6333C15.8698 17.6262 14.7977 18.4022 13.6045 18.9612C12.4113 19.5202 11.214 19.8665 10.0125 20Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Bring your fitness goals",
    highlight: "into focus",
    label: "Activity and Fitness",
    image:
      "https://ourahealth.imgix.net/why-oura/oreo/slide-3-activity.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=1920&s=c2cbfbdcb0f092706378778b40457711",
    alt: "Man wearing an Oura Ring while running outside",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 16 20" className="h-5 w-5">
        <path
          d="M4.45095 5.5117C4.73428 3.67008 6.05393 1.87404 8.09191 1.52088C7.87 3.93585 9.16508 6.22092 10.9827 7.70813C11.7822 8.36225 12.5567 9.12287 13.1274 9.94975C13.6986 10.7773 14.0416 11.6357 14.0416 12.5C14.0416 14.4344 13.3821 15.9313 12.3284 16.9455C11.7028 17.5476 10.9213 17.9959 10.0213 18.2617C10.3223 17.8622 10.4999 17.3306 10.4999 16.6667C10.4999 14.6204 9.66248 12.5742 8.67308 11.4419C8.43837 11.1733 8.05572 11.3873 8.03086 11.7431C7.94516 12.9702 7.30981 13.6392 6.6972 14.2842C6.08728 14.9263 5.49989 15.5448 5.49989 16.6667C5.49989 17.2843 5.72388 17.8497 6.09505 18.2859C3.77124 17.6208 2.36883 15.7411 1.94609 13.6274C1.55658 11.6799 1.95462 10.1547 2.30891 9.44618C2.46328 9.13744 2.33815 8.76202 2.02941 8.60765C1.72068 8.45328 1.34525 8.57842 1.19088 8.88715C0.711819 9.84525 0.276544 11.6535 0.720367 13.8726C1.34807 17.0111 3.85096 19.7917 7.9999 19.7917C10.0418 19.7917 11.8718 19.12 13.1952 17.8461C14.5224 16.5687 15.2916 14.7323 15.2916 12.5C15.2916 11.2998 14.8162 10.1961 14.1562 9.23973C13.4957 8.28274 12.6263 7.4378 11.7743 6.74069C10.0428 5.32399 8.99677 3.20252 9.40747 1.14904C9.50396 0.6666 9.13159 0.192803 8.61205 0.212508C5.48704 0.331034 3.58739 2.90426 3.21549 5.32163C2.98407 6.82588 3.3324 8.09555 3.73237 8.9812C3.93249 9.42431 4.14729 9.77555 4.31407 10.0185C4.39762 10.1401 4.46958 10.2353 4.52233 10.302L4.61534 10.4144C4.84543 10.6732 5.24047 10.6965 5.49846 10.4671C5.75591 10.2383 5.77959 9.8444 5.55178 9.58638L5.34457 9.31096C5.21187 9.11767 5.03605 8.83089 4.87158 8.46671C4.54238 7.73778 4.26571 6.71579 4.45095 5.5117Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Understand the ins and outs of",
    highlight: "women's health",
    label: "Women's Health",
    image:
      "https://ourahealth.imgix.net/why-oura/oreo/slide-5-womens.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=1920&s=52fb0ff62aa14edffb631f82ffa4e1b5",
    alt: "A pregnant woman holding her belly and wearing an Oura Ring",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5">
        <path
          d="M11.25 1.5625C11.25 0.699555 11.9496 0 12.8125 0C13.6754 0 14.375 0.699555 14.375 1.5625V14.6875C14.375 15.5504 13.6754 16.25 12.8125 16.25C11.9496 16.25 11.25 15.5504 11.25 14.6875V1.5625ZM7.1875 3.75C6.32455 3.75 5.625 4.44955 5.625 5.3125V18.4375C5.625 19.3004 6.32455 20 7.1875 20C8.05044 20 8.75 19.3004 8.75 18.4375V5.3125C8.75 4.44955 8.05044 3.75 7.1875 3.75ZM1.5625 6.875C0.699555 6.875 0 7.57455 0 8.4375V12.8125C0 13.6754 0.699555 14.375 1.5625 14.375C2.42544 14.375 3.125 13.6754 3.125 12.8125V8.4375C3.125 7.57455 2.42544 6.875 1.5625 6.875ZM18.4375 5C17.5746 5 16.875 5.69955 16.875 6.5625V12.1875C16.875 13.0504 17.5746 13.75 18.4375 13.75C19.3004 13.75 20 13.0504 20 12.1875V6.5625C20 5.69955 19.3004 5 18.4375 5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Put your stress to",
    highlight: "the test",
    label: "Stress",
    image:
      "https://ourahealth.imgix.net/why-oura/oreo/slide-6-stress.jpg?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=1920&s=703462094c01825267331562243f2713",
    alt: "Woman sitting in a park wearing an Oura Ring",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5">
        <path
          d="M12.0833 2.08333C12.0833 3.23393 11.1506 4.16667 10 4.16667C8.84941 4.16667 7.91667 3.23393 7.91667 2.08333C7.91667 0.93274 8.84941 0 10 0C11.1506 0 12.0833 0.93274 12.0833 2.08333ZM13.3333 5.83333C13.6261 5.83333 13.8973 5.98692 14.0479 6.23792L15.0914 7.97707C15.8444 9.23209 17.2007 10 18.6643 10H19.1667C19.6269 10 20 10.3731 20 10.8333C20 11.2936 19.6269 11.6667 19.1667 11.6667H18.6643C16.6153 11.6667 14.7165 10.5916 13.6622 8.83456L12.8615 7.5H8.33334V14.1667C8.33334 14.6269 7.96024 15 7.5 15H2.19951C1.90523 15 1.66667 15.2386 1.66667 15.5328C1.66667 15.7893 1.8493 16.0093 2.10131 16.0566L4.32024 16.4726C4.7726 16.5574 5.07055 16.9929 4.98573 17.4452C4.90091 17.8976 4.46545 18.1955 4.0131 18.1107L1.79417 17.6947C0.753859 17.4996 0 16.5913 0 15.5328C0 14.3181 0.984756 13.3333 2.19951 13.3333H6.66667V8.28637L6.33776 8.83456C5.28354 10.5916 3.38475 11.6667 1.33571 11.6667H0.833333C0.373096 11.6667 0 11.2936 0 10.8333C0 10.3731 0.373096 10 0.833333 10H1.33571C2.79931 10 4.15559 9.23209 4.9086 7.97707L5.95209 6.23792C6.10269 5.98692 6.37395 5.83333 6.66667 5.83333H13.3333Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function LiveHealthCarouselSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const sliderRef = useRef<HTMLUListElement>(null);
  const loopedSlides = [...slides, ...slides, ...slides];
  const isRecenteringRef = useRef(false);
  const dragStateRef = useRef<{
    isDragging: boolean;
    startX: number;
    startScrollLeft: number;
  }>({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    let loopWidth = 0;
    let frame = 0;

    const getSlides = () =>
      Array.from(slider.querySelectorAll<HTMLElement>("[data-loop-slide='true']"));

    const measureLoop = () => {
      const slideItems = getSlides();
      const firstSetStart = slideItems[0]?.offsetLeft ?? 0;
      const secondSetStart = slideItems[slides.length]?.offsetLeft ?? 0;

      loopWidth = secondSetStart - firstSetStart;
    };

    const syncInfinitePosition = () => {
      if (dragStateRef.current.isDragging || isRecenteringRef.current) {
        return;
      }

      measureLoop();

      if (!loopWidth) {
        return;
      }

      const min = loopWidth * 0.5;
      const max = loopWidth * 1.5;
      let nextLeft = slider.scrollLeft;

      if (slider.scrollLeft < min) {
        nextLeft = slider.scrollLeft + loopWidth;
      } else if (slider.scrollLeft > max) {
        nextLeft = slider.scrollLeft - loopWidth;
      }

      if (nextLeft !== slider.scrollLeft) {
        isRecenteringRef.current = true;
        slider.scrollLeft = nextLeft;
        window.requestAnimationFrame(() => {
          isRecenteringRef.current = false;
        });
      }
    };

    const positionSlider = () => {
      measureLoop();

      const slideItems = getSlides();
      const secondCard = slideItems[slides.length + 1];

      if (!secondCard) {
        return;
      }

      slider.scrollTo({
        left:
          secondCard.offsetLeft -
          (slider.clientWidth - secondCard.clientWidth) / 2,
        behavior: "auto",
      });
    };

    positionSlider();
    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        syncInfinitePosition();
        frame = 0;
      });
    };

    slider.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", positionSlider);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      slider.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", positionSlider);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateParallax = () => {
      const cards = document.querySelectorAll<HTMLElement>("[data-parallax-card]");
      const maxOffset = window.innerWidth < 768 ? 34 : 22;
      const travel = window.innerWidth < 768 ? -44 : -30;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const cardCenter = rect.top + rect.height / 2;
        const distanceFromCenter = (cardCenter - viewportCenter) / window.innerHeight;
        const offset = Math.max(-maxOffset, Math.min(maxOffset, distanceFromCenter * travel));

        card.style.setProperty("--parallax-offset", `${offset}px`);
      });
    };

    const queueParallax = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        updateParallax();
        frame = 0;
      });
    };

    updateParallax();
    window.addEventListener("scroll", queueParallax, { passive: true });
    window.addEventListener("resize", queueParallax);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", queueParallax);
      window.removeEventListener("resize", queueParallax);
    };
  }, []);

  const handlePointerDown = (clientX: number) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    dragStateRef.current = {
      isDragging: true,
      startX: clientX,
      startScrollLeft: slider.scrollLeft,
    };
  };

  const handlePointerMove = (clientX: number) => {
    const slider = sliderRef.current;
    const dragState = dragStateRef.current;

    if (!slider || !dragState.isDragging) {
      return;
    }

    slider.scrollLeft = dragState.startScrollLeft - (clientX - dragState.startX);
  };

  const handlePointerUp = () => {
    dragStateRef.current.isDragging = false;
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-18 h-[340px] blur-3xl md:top-20 md:h-[420px]"
      >
        <div className="absolute left-[12%] top-[8%] h-40 w-56 rounded-full bg-[rgba(225,196,160,0.32)] md:h-56 md:w-80" />
        <div className="absolute right-[10%] top-[2%] h-40 w-56 rounded-full bg-[rgba(189,208,232,0.3)] md:h-56 md:w-80" />
      </div>

      <div className="pt-6 md:pt-8">
          <div className="mx-auto max-w-[1280px] px-5 text-center md:px-8">
            <div className="mx-auto max-w-[900px]">
              <h2
                className={`text-[2.75rem] leading-[0.95] tracking-[-0.05em] text-[var(--oura-ink)] transition-all duration-900 ease-out md:text-[4.75rem] ${
                  titleVisible
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-6 opacity-0 blur-[6px]"
                }`}
              >
                Live healthier,
                <br />
                <span
                  className="mt-1 inline-block not-italic"
                  style={{
                    fontFamily: "var(--font-editorial)",
                    fontStyle: "italic",
                    fontWeight: 700,
                  }}
                >
                  longer
                </span>
              </h2>
            </div>
          </div>

          <p className="mx-auto mt-6 px-5 text-center text-[0.78rem] uppercase tracking-[0.18em] text-[var(--oura-mute)] md:px-8">
            Drag to explore
          </p>

        <div className="mt-10 md:mt-14">
            <div className="overflow-hidden">
              <ul
                ref={sliderRef}
                onMouseDown={(event) => handlePointerDown(event.clientX)}
                onMouseMove={(event) => handlePointerMove(event.clientX)}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                className="mt-0 flex gap-5 overflow-x-auto px-[10vw] md:gap-6 md:px-[14vw] select-none md:cursor-grab md:active:cursor-grabbing"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {loopedSlides.map((slide, index) => (
                  <li
                    key={`${slide.label}-${index}`}
                    data-loop-slide="true"
                    className="w-[78vw] max-w-[493px] flex-none pb-8 md:w-[360px] lg:w-[372px] xl:w-[384px]"
                  >
                    <article className="relative h-[388px] overflow-hidden rounded-[18px] md:h-[540px] lg:h-[560px] xl:h-[580px]">
                      <div
                        data-parallax-card
                        className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
                        style={{ transform: "translate3d(0, var(--parallax-offset, 0px), 0) scale(1.1)" }}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt}
                          fill
                          sizes="(max-width: 768px) 80vw, 493px"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-black/45" />

                      <div className="absolute left-5 top-5 flex items-center gap-2.5 rounded-full bg-white/14 px-5 py-3 text-[0.78rem] text-[var(--oura-cream)] backdrop-blur-xl md:left-6 md:top-6 md:px-6 md:py-4">
                        {slide.icon}
                        <span>{slide.label}</span>
                      </div>

                      <div className="absolute right-0 bottom-0 left-0 p-6 md:p-7">
                        <h3 className="max-w-[340px] text-[1.85rem] leading-[0.94] tracking-[-0.04em] text-[var(--oura-cream)] md:max-w-[320px] md:text-[2.75rem] lg:max-w-[336px] lg:text-[2.95rem] xl:max-w-[348px] xl:text-[3.05rem]">
                          {slide.title}{" "}
                          <em
                            className="not-italic"
                            style={{
                              fontFamily: "var(--font-editorial)",
                              fontStyle: "italic",
                              fontWeight: 700,
                            }}
                          >
                            {slide.highlight}
                          </em>
                        </h3>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto mt-2 max-w-[1280px] px-5 md:px-8">
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => document.getElementById("select-model")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--oura-ink)] px-7 py-3 text-sm font-medium tracking-[0.02em] text-[var(--oura-cream)] transition-all duration-150 hover:bg-[var(--oura-slate)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Choose Yours
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
