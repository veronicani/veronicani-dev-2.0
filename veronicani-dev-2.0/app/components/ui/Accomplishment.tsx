/** Accomplishment component (i.e. bullets). */
export default function Accomplishment({ description }: { description: string }) {
  return (
    <li
      className="lg:group-hover/bullets:opacity-40 lg:hover:!opacity-100
      transition motion-reduce:transition-none"
    >
      <p>{description}</p>
    </li>
  );
}
