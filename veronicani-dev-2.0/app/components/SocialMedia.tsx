import { SOCIAL_LINKS } from "../lib/data";

/** Social Media.
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> Footer
 */
export default function SocialMedia() {
  return (
    <div className="flex gap-3">
      {SOCIAL_LINKS.map(({ name, url, cls, path }) => (
        <a
          key={name}
          href={url}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="currentColor"
            className={`bi ${cls}`}
            viewBox="0 0 16 16"
          >
            <path d={path}/>
          </svg>
        </a>
      ))}
    </div>
  );
}
