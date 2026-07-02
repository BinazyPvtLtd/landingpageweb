import { ArrowUpRight } from "lucide-react";
import React from "react";
import img1 from "../assets/collegeDrishti.png";
import img2 from "../assets/clo.png";
import img3 from "../assets/onlinelpu.png";
import img4 from "../assets/sholini.png";
import img5 from "../assets/manipaal.png";
import img6 from "../assets/collegequestion.png";
import { FaLinkedin } from "react-icons/fa";

const portfolioData = [
  {
    id: 1,
    title: "College Drishti",
    category: "Education Platform",
    image: img1,
    description:
      "A modern college discovery platform that helps students compare colleges, explore courses, and make informed admission decisions through a seamless user experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://collegedrishti.com/",
  },
  {
    id: 2,
    title: "CLO Fashion Store",
    category: "E-Commerce",
    image: img2,
    description:
      "A full-featured fashion e-commerce website with product catalog, secure checkout, order management, and a responsive shopping experience.",
    technologies: ["React", "Express", "MongoDB"],
    link: "https://clo.co.in/",
  },
  {
    id: 3,
    title: "Online LPU",
    category: "University Admission",
    image: img3,
    description:
      "An online admission portal designed to help prospective students explore programs, submit inquiries, and begin their university application journey.",
    technologies: ["React", "Express", "MongoDB"],
    link: "https://onlinelpu.com/",
  },
  {
    id: 4,
    title: "Online MBA Study",
    category: "Education",
    image: img4,
    description:
      "An educational platform dedicated to online MBA programs, providing course information, eligibility details, and admission assistance for students.",
    technologies: ["React", "Express", "MongoDB"],
    link: "https://onlinembastudy.com/",
  },
  {
    id: 5,
    title: "Online Manipal University Admission Portal",
    category: "University Admission",
    image: img5,
    description:
      "A dedicated admission portal for Online Manipal University, enabling students to explore programs, apply online, and connect with admission counselors.",
    technologies: ["React", "Firebase"],
    link: "https://onlinembastudy.com/manipal/",
  },
  {
    id: 6,
    title: "College Question Online Degree Search Platform",
    category: "Education Platform",
    image: img6,
    description:
      "An online degree search platform that allows students to discover universities, compare programs, and find the right online degree based on their career goals.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://collegequestion.com/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Recent Work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-5">
            We build scalable digital products that help businesses grow,
            automate operations, and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-sm border border-gray-200">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56 lg:h-60"
                />
              </div>

              <div className="p-5 sm:p-6">
                <span className="text-sm font-medium text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-2 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3 sm:text-base">
                  View Project
                  <ArrowUpRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
