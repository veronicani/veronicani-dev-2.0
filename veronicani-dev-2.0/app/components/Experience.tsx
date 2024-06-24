import { EXPERIENCES } from "../lib/data";
import Section from "./ui/Section";
import ExperienceCard from "./ui/ExperienceCard";
import ButtonLink from "./ui/ButtonLink";

/** Experience section.
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> Experience -> ExperienceCard[]
 */
export default function Experience() {
  return (
    <Section heading="Experience" id="#experience">
      <ol className="group/list flex flex-col lg:gap-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard
            key={`${experience.position}${experience.company}`}
            experience={experience}
          />
        ))}
      </ol>
      <div className="py-2">
        <ButtonLink
          icon="bi-link-45deg"
          text="Resume PDF"
          url="/static/files/resume.pdf"
        />
      </div>
    </Section>
  );
}
