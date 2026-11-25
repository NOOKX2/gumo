"use client";

import { useState } from "react";
import { FAQS } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-display text-sm tracking-[0.22em] text-accent uppercase">
            Good to know.
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight font-semibold text-accent-deep md:text-5xl">
            FAQs
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {FAQS.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 40}>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                  >
                    <span className="font-thai text-lg text-accent-deep md:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`mt-1 shrink-0 text-accent transition-transform ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-thai pb-5 text-base leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
