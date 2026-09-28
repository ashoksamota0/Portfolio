"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { AnimatedButton } from "./AnimatedButton";

const projectsData = [
  {
    id: 1,
    title: "VoxMeet",
    description:
      "Real-time video conferencing platform with video and audio calls, screen sharing, real-time chat, participant management, meeting history, and Free/Premium plans.",
    github: "https://github.com/ashoksamota0/VoxMeet",
    live: "https://voxmeet-video.vercel.app",
    img: "/voxmeet.png",
    alt: "VoxMeet - Real-Time Video Calling Platform",
  },
  {
    id: 2,
    title: "NeuralForge AI",
    description:
      "Full-stack AI SaaS platform featuring AI article writing, blog title generation, resume review, image generation, background removal, and object removal.",
    github: "https://github.com/ashoksamota0/NeuralForge-AI-SaaS",
    live: "https://neuralforge-ai-web.vercel.app",
    img: "/neuralforge-ai.png",
    alt: "NeuralForge AI - Full Stack AI SaaS Platform",
  },
  {
    id: 3,
    title: "TalentBridge",
    description:
      "Full-stack recruitment platform with separate recruiter and candidate dashboards, job management, applications, search, filtering, pagination, and role-based authentication.",
    github: "https://github.com/ashoksamota0/TalentBridge",
    live: "https://talent-bridge-portal.vercel.app",
    img: "/talentbridge.png",
    alt: "TalentBridge - Full Stack Recruitment Platform",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="w-full mx-auto text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase"
      >
        Professional{" "}
        <span className="text-primary block md:inline">Projects</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group relative bg-[#1a1a1a] border border-white/10 rounded-[1rem] overflow-hidden transition-all duration-500 hover:border-primary/40 flex flex-col h-full shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative h-[240px] w-full overflow-hidden bg-dark">
              <img
                src={project.img}
                alt={project.alt || project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                {project.title}
              </h3>

              <p className="text-[#b0b0b0] mt-3 mb-8 leading-relaxed text-sm md:text-base flex-grow">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 justify-center md:justify-start items-center">
                {project.live && (
                  <AnimatedButton
                    label="Live"
                    icon={<FaExternalLinkAlt className="text-sm" />}
                    href={project.live}
                  />
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300 text-sm font-semibold uppercase tracking-widest"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
