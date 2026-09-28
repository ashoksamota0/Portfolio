import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Resume | Ashok Kumar - Full Stack Developer",
  description:
    "View and download Ashok Kumar's professional resume. Full Stack Developer with experience in building modern web applications, real-time platforms, and AI-powered digital products.",
  keywords:
    "Ashok Kumar resume, Full Stack Developer resume, Web Developer CV, Download resume, React Developer resume, Node.js Developer resume",
};

const Resume = dynamic(
  () => import("../../components/Resume").then((mod) => mod.Resume),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary" />
      </div>
    ),
  },
);

export default function ResumePage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Resume />
      </div>
    </section>
  );
}
