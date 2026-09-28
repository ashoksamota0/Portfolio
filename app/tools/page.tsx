import type { Metadata } from "next";
import Link from "next/link";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaTools,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiSocketdotio,
  SiPostman,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Tools & Technologies | Ashok Kumar",
  description:
    "Explore the technologies, frameworks, databases, and development tools used by Ashok Kumar for building full-stack web applications.",
};

const toolCategories = [
  {
    title: "Languages",
    description: "Programming languages and core web technologies I work with.",
    tools: [
      {
        name: "Java",
        icon: <FaJava />,
        description: "Programming and DSA",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        description: "Web application development",
      },
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        description: "Web page structure",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        description: "Styling and responsive layouts",
      },
    ],
  },

  {
    title: "Frontend",
    description: "Technologies used to build modern and responsive interfaces.",
    tools: [
      {
        name: "React.js",
        icon: <FaReact />,
        description: "Component-based UI development",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        description: "Utility-first styling",
      },
    ],
  },

  {
    title: "Backend & Realtime",
    description:
      "Tools used for APIs, server-side applications, and realtime communication.",
    tools: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        description: "JavaScript runtime",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        description: "Backend and REST APIs",
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio />,
        description: "Realtime communication",
      },
      {
        name: "WebRTC",
        icon: <FaTools />,
        description: "Real-time video and audio",
      },
    ],
  },

  {
    title: "Databases",
    description: "Databases used across my full-stack projects.",
    tools: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        description: "NoSQL database",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        description: "Relational database",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        description: "Relational database",
      },
    ],
  },

  {
    title: "Development Tools",
    description: "Tools and services used throughout the development workflow.",
    tools: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        description: "Version control",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        description: "Code hosting and collaboration",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        description: "API testing",
      },
      {
        name: "VS Code",
        icon: <FaTools />,
        description: "Code editor",
      },
      {
        name: "Clerk",
        icon: <FaTools />,
        description: "Authentication",
      },
      {
        name: "Cloudinary",
        icon: <FaTools />,
        description: "Media management",
      },
      {
        name: "Google Gemini AI",
        icon: <FaTools />,
        description: "Generative AI APIs",
      },
    ],
  },
];

export default function ToolsPage() {
  return (
    <section className="w-full py-12 px-2">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-[clamp(2.5rem,8vw,60px)] font-bold text-white leading-tight uppercase">
            Tools & <span className="text-primary">Technologies</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-5 leading-relaxed">
            Technologies and development tools I use to build full-stack,
            realtime, and AI-powered web applications.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {toolCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="mb-7">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {category.title}
                </h2>

                <p className="text-gray-500 text-sm md:text-base mt-2">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col items-center justify-center text-center min-h-[150px] transition-all duration-500 hover:bg-primary hover:border-primary hover:-translate-y-1"
                  >
                    <div className="text-4xl text-primary group-hover:text-black transition-colors duration-500 mb-4">
                      {tool.icon}
                    </div>

                    <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-black transition-colors duration-500">
                      {tool.name}
                    </h3>

                    <p className="text-xs text-gray-500 group-hover:text-black/70 transition-colors duration-500 mt-2">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects CTA */}
        <div className="mt-12 bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Want to see these technologies in action?
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Explore my projects to see how I use these technologies to build
            real-world applications.
          </p>

          <Link
            href="/projects"
            className="inline-flex mt-6 px-7 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors"
          >
            View My Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
