import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/BinazyLogo.jpg";
const services = [
  "Website Development",
  "Custom Software",
  "UI/UX Design",
];

const quickLinks = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#services" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "FAQ", path: "#faq" },

];

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Binazy logo"
                loading="lazy"
                decoding="async"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-2xl font-bold text-white sm:text-3xl">
                Binazy<span className="text-blue-500">.</span>
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
              We build fast, scalable, and modern websites & software solutions
              that help businesses grow and generate more leads.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 sm:mt-6">
              <a
                href="https://www.instagram.com/binazy.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition hover:text-blue-400 sm:text-base">
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/binazy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition hover:text-blue-400 sm:text-base">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-5 sm:text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="flex items-center gap-2 text-sm transition hover:text-blue-400 sm:text-base">
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-5 sm:text-lg">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-gray-400 transition hover:text-blue-400 sm:text-base">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:mb-5 sm:text-lg">
              Contact
            </h3>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-blue-500 sm:h-4.5 sm:w-4.5" />
                <a
                  href="mailto:work@binazy.org"
                  className="break-all hover:text-blue-400">
                  work@binazy.org
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-blue-500 sm:h-4.5 sm:w-4.5" />
                <a href="tel:+919616185503" className="hover:text-blue-400">
                  +91 9616185503
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-blue-500 sm:h-4.5 sm:w-4.5" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:mt-14 md:flex-row">
          <p className="text-center text-sm text-gray-500 md:text-left">
            Copyright {new Date().getFullYear()} Binazy. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-3 text-sm sm:flex-row sm:gap-6">
            <a
              href="mailto:work@binazy.org?subject=Privacy%20Policy%20Request"
              className="hover:text-blue-400">
              Privacy Policy
            </a>

            <a
              href="mailto:work@binazy.org?subject=Terms%20and%20Conditions%20Request"
              className="hover:text-blue-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
