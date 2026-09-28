import { Metadata } from "next";
import { Experience } from "../../components/Experience";

export const metadata: Metadata = {
  title: "Professional Experience | Ashok Kumar - Full Stack Developer",
  description:
    "Explore Ashok Kumar's professional experience as a Full Stack Developer, including his Web Development Internship at CodSoft.",
  keywords:
    "Ashok Kumar experience, Full Stack Developer experience, Web Developer portfolio, CodSoft, Web Development Intern",
};

export default function ExperiencePage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Experience />
      </div>
    </section>
  );
}
