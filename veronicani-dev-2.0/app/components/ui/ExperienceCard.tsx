import Card from "./Card";
import CardHeading from "./CardHeading";
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
        <CardHeading classes="text-blue-500" heading={position} />
        <h5 className="text-gray-dark font-bold">{company}</h5>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <h5>{years[0]}</h5>
            {years[1] && 
              <>
              <h5>—</h5>
              <h5>{years[1]}</h5>
              </>
            }     
          </div>
          <h5>{location}</h5>
        </div>
      </div>
      <ul className="group/bullets space-y-4">
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
