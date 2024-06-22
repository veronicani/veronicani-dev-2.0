/** Accomplishment component (i.e. bullets). */
export default function Accomplishment({ description }: { description: string }) {
  return (
    <li
      className="md:w-3/4 flex" //style tag width here
    >
      <p>{description}</p>
    </li>
  );
}
