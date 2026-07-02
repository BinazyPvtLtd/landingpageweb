import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

const logos = [
  {
    name: "Company One",
    logo: logo1,
  },
  {
    name: "Company Two",
    logo: logo2,
  },
  {
    name: "Company Three",
    logo: logo3,
  },
  {
    name: "Company Four",
    logo: logo4,
  },
  {
    name: "Company Five",
    logo: logo5,
  },
  {
    name: "Company Six",
    logo: logo6,
  },
  {
    name: "Company Seven",
    logo: logo7,
  },
];

export default function TrustedBy() {
  return (
    <section className="overflow-hidden bg-white/90 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 sm:mb-10 sm:text-xl">
          Trusted By
        </p>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 sm:gap-12 lg:gap-16">
            {[...logos, ...logos].map((item, index) => (
              <div
                key={index}
                className="flex h-14 w-28 items-center justify-center transition sm:h-20 sm:w-40">
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-14 object-contain sm:max-h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
