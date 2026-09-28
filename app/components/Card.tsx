"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub, FaCode } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ashok~kumar/",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:ashok19samota@gmail.com",
    label: "Email",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/ashoksamota0",
    label: "GitHub",
  },
  {
    icon: <FaCode />,
    link: "https://leetcode.com/u/ashok19samota/",
    label: "LeetCode",
  },
];

export const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group relative bg-[#1a1a1a] border border-white/10 w-full max-w-[350px] min-h-[580px] p-6 text-center rounded-[2.5rem] transition-all duration-500 hover:border-primary/40 overflow-hidden shadow-2xl"
      >
        {/* Subtle Background Glow on Hover */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />

        {/* Profile Image */}
        <div className="relative w-[250px] h-[240px] mx-auto mb-6">
          <div className="w-full h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl group-hover:border-primary/20 transition-all duration-700">
            <Image
              src="/profile.jpeg"
              alt="Ashok Kumar - Full Stack Developer"
              width={250}
              height={240}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name Section */}
        <h2 className="text-3xl font-black text-white tracking-tight group-hover:text-primary transition-colors duration-500">
          Ashok Kumar
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#b0b0b0] mt-3 leading-relaxed font-medium">
          Full Stack Developer focused on building{" "}
          <span className="text-white">scalable web applications</span> and
          AI-powered digital products.
        </p>

        {/* CTA Button */}
        <div className="mt-8 mb-8">
          <Link href="/contact" className="inline-block w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-black py-3.5 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:bg-white hover:text-black shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              Let&#39;s Connect
            </motion.button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-gray-500 text-2xl transition-all duration-500 hover:text-primary"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Footer subtle decoration */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
      </motion.article>
    </div>
  );
};

export default Card;
