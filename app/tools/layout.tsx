import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools & Technologies | Ashok Kumar",
  description:
    "Explore the technologies, frameworks, databases, and development tools used by Ashok Kumar for building full-stack web applications.",
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
