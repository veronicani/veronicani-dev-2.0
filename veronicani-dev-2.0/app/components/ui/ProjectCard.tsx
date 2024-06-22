import Image from "next/image";
import Card from "./Card";
import Tag from "./Tag";
import Credentials from "./Credentials";
import CustomLink from "./CustomLink";
import { tProject } from "@/app/lib/types";

type tProjectCardProps = { project: tProject };

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
      <div>
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
        width={500}
        height={0}
      />
      <h4>{title}</h4>
      <div>
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
      <div>
        <p>{description}</p>
        <small>{notes}</small>
      </div>
    </Card>
  );
}
