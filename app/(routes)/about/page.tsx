import { Metadata } from "next";
import { About } from "../../components/About";

export const metadata: Metadata = {
  title: "About Ashok Kumar | Full Stack Developer",
  description:
    "Learn about Ashok Kumar, a Full Stack Developer focused on building scalable web applications and AI-powered digital products using modern technologies.",
  keywords:
    "About Ashok Kumar, Full Stack Developer bio, Web Developer India, Ashok Kumar profile, React Developer, Node.js Developer",
};

export default function AboutPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <About />
      </div>
    </section>
  );
}
