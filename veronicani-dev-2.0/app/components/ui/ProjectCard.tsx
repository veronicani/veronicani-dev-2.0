import Image from "next/image";
import Card from "./Card";
import Tag from "./Tag";
import Credentials from "./Credentials";
import CustomLink from "./CustomLink";
import { tProject } from "@/app/lib/types";
import CardHeading from "./CardHeading";

type tProjectCardProps = { project: tProject };

/** Project card component. 
 * 
 * Props:
 * - project: project data object
 * State:
 * - none
 * 
 * Projects -> Section -> { SectionHeading, ProjectCard[] }
*/
export default function ProjectCard({ project }: tProjectCardProps) {
  const {
    title,
    imageUrl,
    imageAlt,
    tags,
    description,
    loginCreds,
    urls,
    notes,
  } = project;

  function provideAdminOrGuestCreds() {
    if (!loginCreds) return null;
    if (loginCreds.admin) {
      return (
        <Credentials
          username={loginCreds!.admin.username}
          password={loginCreds!.admin.password}
        />
      );
    } else if (loginCreds.guest) {
      return (
        <Credentials
          username={loginCreds!.guest.username}
          password={loginCreds!.guest.password}
        />
      );
    }
  }

  return (
    <Card className="Project-card">
      <div className="flex flex-wrap gap-2 pb-2">
        {tags.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
          />
        ))}
      </div>
      <Image
        src={`/static/demos/${imageUrl}`}
        alt={imageAlt}
        width={700}
        height={0}
      />
      <CardHeading classes="text-gray-dark" heading={title} />
      <div className="flex gap-2">
        {urls.github && (
          <CustomLink
            displayText="Github"
            url={urls.github}
          />
        )}
        {urls.demo && (
          <CustomLink
            displayText="Demo"
            url={urls.demo}
          />
        )}
      </div>
      <div>{provideAdminOrGuestCreds()}</div>
      <div className="pt-4">
        <p>{description}</p>
        <small className="text-gray-dark">{notes}</small>
      </div>
    </Card>
  );
}
