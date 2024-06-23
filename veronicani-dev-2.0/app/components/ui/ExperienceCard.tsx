import Card from "./Card";
import Accomplishment from "./Accomplishment";
import { tExperience } from "@/app/lib/types";

type tExperienceCardProps = { experience: tExperience };

/** Experience card component.
 *
 * Props:
 * - experience: experience data object
 * State:
 * - none
 *
 * Experience -> Section -> { SectionHeading, ExperienceCard[] }
 */

export default function ExperienceCard({ experience }: tExperienceCardProps) {
  const { position, company, location, years, description } = experience;

  return (
    <Card className="Experience-card">
      <div>
        <h3>{position}</h3>
        <h4>{company}</h4>
        <div>
          <div>
            <h5>{years[0]}</h5>
            {years[1] && <h5>{` - ${years[1]}`}</h5>}
          </div>
          <h5>{location}</h5>
        </div>
      </div>
      <ul>
        {description.map((d) => (
          <Accomplishment
            key={d}
            description={d}
          />
        ))}
      </ul>
    </Card>
  );
}
