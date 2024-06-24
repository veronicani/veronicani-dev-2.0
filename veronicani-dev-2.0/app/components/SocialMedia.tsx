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
    <ul className="flex gap-3">
      {SOCIAL_LINKS.map(({ name, url, cls, path }) => (
        <li
          key={name}
          className=""
        >
          <a href={url}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              className={`bi ${cls} fill-gray-light lg:hover:fill-blue-500 transition motion-reduce:transition-none`}
              viewBox="0 0 16 16"
            >
              <path d={path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
