import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ashok Kumar - Full Stack Developer",
    short_name: "Ashok Kumar",
    description:
      "Full Stack Developer & SaaS Builder from India. Focused on building scalable web applications and AI-powered digital products.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
  };
}
