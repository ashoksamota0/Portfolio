"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="w-full py-12 px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-[#1a1a1a] border border-white/10 p-8 md:p-12 rounded-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-primary">Ashok Kumar</span>
        </h1>

        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Hello! I&apos;m <strong className="text-white">Ashok Kumar</strong>,
            a passionate
            <strong className="text-primary"> Full Stack Developer </strong>
            with a strong foundation in modern web technologies. I specialize in
            building scalable, responsive, and user-friendly web applications
            using technologies such as React, Node.js, Express.js, MongoDB, and
            PostgreSQL.
          </p>

          <p>
            I enjoy building complete end-to-end applications, from designing
            interactive frontend experiences to developing RESTful APIs and
            working with databases. I have also worked with technologies such as
            WebRTC, Socket.io, Clerk, Google Gemini AI, and Cloudinary to build
            real-time and AI-powered applications.
          </p>

          <p>
            During my Web Development Internship at{" "}
            <strong className="text-white">CodSoft</strong>, I worked on
            TalentBridge, a full-stack recruitment platform with recruiter and
            candidate workflows, authentication, job management, and application
            processing.
          </p>

          <p className="text-white font-medium">
            I&apos;m currently open to full-time opportunities where I can
            contribute to real-world products, strengthen my technical skills,
            and grow as a Full Stack Developer.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 p-4 rounded-xl">
            <h3 className="text-primary font-semibold mb-2">
              Contact Information
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <strong className="text-white">Name:</strong> Ashok Kumar
              </li>

              <li>
                <strong className="text-white">Profession:</strong> Full Stack
                Developer
              </li>

              <li>
                <strong className="text-white">Location:</strong> Marathahalli,
                Bengaluru
              </li>

              <li>
                <strong className="text-white">Mobile:</strong> +91-8095771057
              </li>

              <li>
                <strong className="text-white">Email:</strong>{" "}
                ashok19samota@gmail.com
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-4 rounded-xl">
            <h3 className="text-primary font-semibold mb-2">Connect with Me</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/ashok~kumar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/ashoksamota0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://leetcode.com/u/ashok19samota/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
