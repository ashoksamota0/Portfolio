import { Metadata } from "next";
import { GithubCalendar } from "../../components/GithubCalendar";

export const metadata: Metadata = {
  title: "GitHub Profile | Ashok Kumar - Full Stack Developer",
  description:
    "Explore Ashok Kumar's GitHub profile, projects, source code, and development work as a Full Stack Developer.",
  keywords:
    "Ashok Kumar GitHub, GitHub profile, Full Stack Developer GitHub, GitHub projects, source code",
};

export default function GithubPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <GithubCalendar />
      </div>
    </section>
  );
}
