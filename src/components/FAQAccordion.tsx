"use client";

import React, { useState } from 'react';
import { FAQItem } from '@/lib/types';

interface FAQAccordionProps {
  items: FAQItem[];
  includeSchema?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, includeSchema = false }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item opened by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = includeSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <div className="w-full">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="transition-colors">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 px-5 text-left font-medium text-slate-100 hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 gap-4"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-base sm:text-lg font-semibold">{item.question}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-sky-500/20 text-sky-400' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
