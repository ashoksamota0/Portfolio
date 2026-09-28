import { Metadata } from "next";
import { HomeSection } from "./components/HomeSection";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { GithubCalendar } from "./components/GithubCalendar";
import { Contact } from "./components/Contact";

export const metadata: Metadata = {
  title: "Ashok Kumar - Full Stack Developer Portfolio",
  description:
    "Welcome to the portfolio of Ashok Kumar, a Full Stack Developer specializing in React, Node.js, Express.js, PostgreSQL, MongoDB, and modern web technologies.",
};

export default function Home() {
  return (
    <>
      <HomeSection />

      <div className="space-y-16 md:space-y-24 pt-8 md:pt-12">
        <Projects />
        <Experience />
        <Education />
        <GithubCalendar />
        <Contact />
      </div>
    </>
  );
}
