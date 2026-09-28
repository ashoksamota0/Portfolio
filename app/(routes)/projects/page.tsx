import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects - Ashok Kumar | Full Stack Developer",
  description:
    "Explore Ashok Kumar's full-stack projects including VoxMeet, NeuralForge AI, and TalentBridge.",
};

const projects = [
  {
    name: "VoxMeet",
    highlight: "Meet",
    subtitle: "Full-Stack Real-Time Video Conferencing Platform",
    image: "/voxmeet.png",

    features: [
      "Real-time video and audio meetings using WebRTC",
      "Browser-based screen sharing",
      "Real-time meeting chat using Socket.io",
      "Dynamic participant management",
      "Meeting history and management",
      "Free and Premium subscription plans",
    ],

    techStack: [
      "React.js for frontend",
      "Node.js + Express.js for backend",
      "PostgreSQL for database",
      "WebRTC for real-time video and audio",
      "Socket.io for real-time communication",
      "Clerk for authentication",
      "Tailwind CSS for styling",
    ],

    liveDemo: "https://voxmeet-video.vercel.app",
    github: "https://github.com/ashoksamota0/VoxMeet",
  },

  {
    name: "NeuralForge AI",
    highlight: "AI",
    subtitle: "Full-Stack AI SaaS Platform",
    image: "/neuralforge-ai.png",

    features: [
      "AI-powered article writing and content generation",
      "AI blog title generation",
      "AI image generation",
      "Background removal and object removal tools",
      "AI-powered resume review",
      "Free and Premium subscription plans with usage limits",
    ],

    techStack: [
      "React.js for frontend",
      "Node.js + Express.js for backend",
      "PostgreSQL for database",
      "Clerk for authentication",
      "Google Gemini AI for AI-powered features",
      "Cloudinary for image and file management",
      "ClipDrop for AI image processing",
    ],

    liveDemo: "https://neuralforge-ai-web.vercel.app",
    github: "https://github.com/ashoksamota0/NeuralForge-AI-SaaS",
  },

  {
    name: "TalentBridge",
    highlight: "Bridge",
    subtitle: "Full-Stack Job Portal Platform",
    image: "/talentbridge.png",

    features: [
      "Candidate and recruiter dashboards",
      "Job creation and job listing management",
      "Candidate job application functionality",
      "Recruiter and candidate role-based access",
      "Authentication and authorization using Clerk",
      "Resume and image/file management using Cloudinary",
    ],

    techStack: [
      "React.js for frontend",
      "Node.js + Express.js for backend",
      "MongoDB for database",
      "Clerk for authentication and authorization",
      "Cloudinary for file and image management",
      "Tailwind CSS for styling",
      "REST APIs for frontend-backend communication",
    ],

    liveDemo: "https://talent-bridge-portal.vercel.app",
    github: "https://github.com/ashoksamota0/TalentBridge",
  },
];

export default function ProjectsPage() {
  return (
    <section className="w-full py-12 px-2">
      <div className="max-w-5xl mx-auto space-y-12">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-[#1a1a1a] border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            {/* Project Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.name.split(project.highlight)[0]}
              <span className="text-primary">{project.highlight}</span>
              {project.name.split(project.highlight)[1]}
            </h1>

            <p className="text-xl text-gray-400 mb-8">{project.subtitle}</p>

            {/* Project Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#111] mb-8 border border-white/5">
              <Image
                src={project.image}
                alt={`${project.name} - ${project.subtitle}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Features + Tech Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Features
                </h2>

                <ul className="space-y-3 text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Tech Stack
                </h2>

                <ul className="space-y-3 text-gray-300">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✦</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors"
              >
                Live Demo →
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/20 text-white rounded-full hover:border-primary/40 hover:text-primary transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
