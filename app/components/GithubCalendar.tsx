"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TbArrowUpRight } from "react-icons/tb";

export const GithubCalendar = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/ashoksamota0", "_blank");
  };

  return (
    <div className="px-2 w-full mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase"
      >
        Github <span className="text-primary">Profile</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-primary/30 transition-all duration-500"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* GitHub Icon & Profile */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <FaGithub className="text-5xl md:text-6xl text-white" />
            </div>

            <div>
              <p className="text-primary text-sm uppercase tracking-widest font-medium mb-2">
                GitHub
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ashok Kumar
              </h3>

              <p className="text-gray-500 mt-1">@ashoksamota0</p>

              <p className="text-gray-400 text-sm md:text-base mt-3 max-w-xl">
                Explore my projects, source code, and development work on
                GitHub.
              </p>
            </div>
          </div>

          {/* GitHub Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGithubClick}
            className="group relative px-7 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12 flex items-center gap-2 whitespace-nowrap"
          >
            <span>View GitHub Profile</span>

            <TbArrowUpRight className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all text-xl" />
          </motion.button>
        </div>

        {/* GitHub URL */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <a
            href="https://github.com/ashoksamota0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-primary transition-colors duration-300"
          >
            github.com/ashoksamota0
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default GithubCalendar;
