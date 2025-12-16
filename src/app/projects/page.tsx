import type { Metadata } from "next";
import { ProjectsPageContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects, from e-commerce platforms to AI-powered applications.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
