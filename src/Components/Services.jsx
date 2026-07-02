// Services.jsx
import {
  ArrowRight,
  Globe,
  Smartphone,
  ShoppingCart,
  Search,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";
import LeadForm from "./LeadForm";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Fast, responsive, and scalable websites built specifically for your business goals using modern technologies.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "Online stores with secure payments, product management, inventory, and a seamless shopping experience.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Mobile-first websites that look and perform perfectly across desktops, tablets, and smartphones.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Development",
    description:
      "Clean code, optimized structure, and fast loading speeds to improve search engine visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance",
    description:
      "Regular updates, security monitoring, backups, bug fixes, and performance optimization to keep your site running smoothly.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Reliable post-launch support and assistance whenever you need updates, improvements, or troubleshooting.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Complete Website Development Solutions
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg">
            We create modern, high-performing websites that help businesses
            attract customers, generate leads, and grow online.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="border border-gray-200 bg-white p-5 sm:p-6 lg:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-800 text-white transition group-hover:bg-blue-900 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-gray-900 sm:mt-6 sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
