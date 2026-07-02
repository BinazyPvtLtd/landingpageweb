import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What website development services do you offer?",
    answer:
      "We build business websites, landing pages, eCommerce stores, portfolio websites, custom web applications, and enterprise solutions tailored to your requirements.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the project scope. A standard business website typically takes 1-3 weeks, while custom web applications may require 4-12 weeks.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and mobile devices.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign your current website with a modern UI, improved performance, better user experience, and SEO best practices.",
  },
  {
    question: "Do you provide SEO-friendly websites?",
    answer:
      "Yes. We follow SEO best practices including clean code, fast loading speed, proper meta tags, semantic HTML, and mobile optimization.",
  },
  {
    question: "Will I be able to update my website later?",
    answer:
      "Yes. We can build your website with an easy-to-manage CMS or provide documentation so you can update content yourself.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. We offer ongoing maintenance, security updates, bug fixes, backups, and feature enhancements after your website is launched.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on your project requirements, features, and complexity. Contact us for a free consultation and custom quotation.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
    <button
      onClick={onClick}
      className="flex w-full items-start justify-between gap-4 p-4 text-left transition hover:bg-gray-50 sm:p-5">
      <h3 className="text-base font-semibold leading-6 text-gray-900 sm:text-lg">
        {faq.question}
      </h3>

      {isOpen ? (
        <ChevronUp className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
      ) : (
        <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-gray-500" />
      )}
    </button>

    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}>
      <div className="overflow-hidden">
        <p className="px-4 pb-4 text-sm leading-6 text-gray-600 sm:px-5 sm:pb-5 sm:text-base sm:leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Everything you need to know about our website development services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
