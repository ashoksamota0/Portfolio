import { Metadata } from "next";
import { Education } from "../../components/Education";

export const metadata: Metadata = {
  title: "Education | Ashok Kumar - Full Stack Developer",
  description:
    "Explore Ashok Kumar's educational background, including his M.Tech and B.Tech degrees in Computer Science and Engineering from Lovely Professional University.",
  keywords:
    "Ashok Kumar education, M.Tech Computer Science, B.Tech Computer Science, Lovely Professional University, CSE",
};

export default function EducationPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Education />
      </div>
    </section>
  );
}
