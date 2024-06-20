import { PROJECTS } from "../lib/data";
import Section from "./ui/Section";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  return (
    <Section heading="Projects">
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </Section>
  );
}
