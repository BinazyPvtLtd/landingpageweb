import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import LeadForm from "./LeadForm";
import img from "../assets/homebg.jpg";

const Hero = ({ onGetQuoteClick }) => {
  const features = [
    "Custom Website Design",
    "SEO Ready",
    "Lightning Fast",
    "Mobile Responsive",
    "Secure Development",
    "Free Consultation",
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/70 to-black/40" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md sm:px-4">
              <ShieldCheck className="h-4 w-4 shrink-0 text-blue-300" />
              <span className="text-xs font-semibold text-white sm:text-sm">
                Trusted by Startups & Growing Businesses
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-4xl">
              Professional Website Development
              <span className="mt-2 block text-blue-300">
                That Delivers Real Business Results
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 lg:mx-0">
              We build fast, modern and conversion-focused websites that help
              businesses attract customers, increase credibility, and grow
              revenue with high-performance digital experiences.
            </p>

            {/* Features */}
            <div className="mx-auto mt-7 grid max-w-sm grid-cols-1 gap-3 text-left sm:max-w-none sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 lg:mx-0">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-sm font-medium text-gray-100 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
              <button
                onClick={onGetQuoteClick}
                className="group inline-flex w-full items-center justify-center rounded-xl bg-blue-800 px-5 py-3.5 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-900 sm:w-auto sm:px-8 sm:py-4">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust */}
            <div className="mt-6 flex flex-col items-center gap-2 text-sm text-gray-200 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <span>Trusted by 50+ businesses</span>
            </div>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-12">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl sm:p-5">
                <h3 className="text-2xl font-bold text-blue-300 sm:text-3xl">
                  100+
                </h3>
                <p className="mt-1 text-sm text-gray-200">Projects Delivered</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl sm:p-5">
                <h3 className="text-2xl font-bold text-blue-300 sm:text-3xl">
                  50+
                </h3>
                <p className="mt-1 text-sm text-gray-200">Happy Clients</p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl sm:p-5">
                <h3 className="text-2xl font-bold text-blue-300 sm:text-3xl">
                  24/7
                </h3>
                <p className="mt-1 text-sm text-gray-200">Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - LEAD FORM */}
          <div className="relative">
            <div className="relative">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
