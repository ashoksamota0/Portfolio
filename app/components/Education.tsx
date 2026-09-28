"use client";

import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const educationData = [
  {
    title: "M.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University",
    description:
      "Master of Technology in Computer Science and Engineering with a focus on advanced computer science concepts, software development, and emerging technologies.",
    period: "2023 - 2025",
    cgpa: "CGPA: 7.89",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University",
    description:
      "Bachelor of Technology in Computer Science and Engineering with a strong foundation in programming, software development, databases, and computer science fundamentals.",
    period: "2019 - 2023",
    cgpa: "CGPA: 8.17",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const Education = () => {
  return (
    <div className="px-2 mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase"
      >
        Educational <span className="text-primary">Background</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </motion.div>
    </div>
  );
};

const EducationCard = ({
  title,
  institution,
  description,
  period,
  cgpa,
}: {
  title: string;
  institution: string;
  description: string;
  period: string;
  cgpa: string;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative w-full bg-[#1a1a1a] border border-white/10 p-6 md:p-8 rounded-3xl transition-all duration-500 hover:bg-primary overflow-hidden flex flex-col justify-between"
    >
      {/* Arrow */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-primary group-hover:bg-black rounded-full flex items-center justify-center transition-all duration-500">
        <FaArrowRightLong className="text-white group-hover:text-primary text-lg -rotate-45 group-hover:rotate-0 transition-all duration-500" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[clamp(1.1rem,3vw,22px)] font-semibold text-white group-hover:text-black transition-colors duration-500 pr-10">
          {title}
        </h3>

        <h4 className="text-primary font-medium text-base mt-2 group-hover:text-black/80 transition-colors duration-500">
          {institution}
        </h4>

        <p className="text-[#b0b0b0] mt-4 leading-relaxed group-hover:text-black/90 transition-colors duration-500 text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Period & CGPA Badges */}
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-white group-hover:border-black/20 group-hover:text-black font-semibold text-xs md:text-sm transition-all duration-500">
          {period}
        </span>

        <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-white group-hover:border-black/20 group-hover:text-black font-semibold text-xs md:text-sm transition-all duration-500">
          {cgpa}
        </span>
      </div>

      {/* Glow Effect */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-black/5 transition-all duration-500" />
    </motion.div>
  );
};
