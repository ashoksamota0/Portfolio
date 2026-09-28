import { Metadata } from "next";
import { Contact } from "../../components/Contact";

export const metadata: Metadata = {
  title: "Contact Ashok Kumar | Full Stack Developer",
  description:
    "Get in touch with Ashok Kumar, Full Stack Developer. Open to full-time opportunities, collaborations, and real-world web development projects.",
  keywords:
    "Contact Ashok Kumar, Hire Full Stack Developer, Full Stack Developer, Web Developer, React Developer, Node.js Developer",
};

export default function ContactPage() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <Contact />
      </div>
    </section>
  );
}
