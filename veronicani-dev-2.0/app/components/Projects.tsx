import { PROJECTS } from "../lib/data";
import Section from "./ui/Section";
import ProjectCard from "./ui/ProjectCard";

/** Projects section.
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * App -> Projects
 */
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
