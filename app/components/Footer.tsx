"use client";

import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaGithub, FaCode } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin className="text-xl" />,
    link: "https://www.linkedin.com/in/ashok~kumar/",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    link: "mailto:ashok19samota@gmail.com",
    label: "Email",
  },
  {
    icon: <FaGithub className="text-xl" />,
    link: "https://github.com/ashoksamota0",
    label: "GitHub",
  },
  {
    icon: <FaCode className="text-xl" />,
    link: "https://leetcode.com/u/ashok19samota/",
    label: "LeetCode",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-16 md:mt-24 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            © {year} Ashok Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-gray-500 transition-all duration-300 hover:text-primary hover:-translate-y-1"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <Link
            href="#top"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            Back to Top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
