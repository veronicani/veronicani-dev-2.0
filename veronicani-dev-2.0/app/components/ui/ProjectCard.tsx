import Image from "next/image";
import Card from "./Card";
import { tProject } from "@/app/lib/types";
import Link from "next/link";

type tProjectCardProps = { project: tProject };

export default function ProjectCard({ project }: tProjectCardProps) {
  const { title, imageUrl, imageAlt, tags, description, loginCreds, urls } =
    project;

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
        src={imageUrl}
        alt={imageAlt}
      />
      <h4>{title}</h4>
      <div>
        {/* {urls.github && <Link displayText="Github" url={urls.github}/>}  */}
        {/* {urls.demo && <Link displayText="Demo" url={urls.github}/>}  */}
      </div>
      <div>
        {loginCreds?.guest &&
          <>
          <div>username:</div>
          <Copyable credential={loginCreds.guest.username} />
          <div>password:</div>
          <Copyable credential={loginCreds.guest.password} />
          </>
        }
        {/* LOGIN CREDS FOR ADMIN */}
      </div>
    </Card>
  );
}
