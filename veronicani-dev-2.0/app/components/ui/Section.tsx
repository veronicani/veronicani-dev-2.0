import SectionHeading from "./SectionHeading";

type tSectionProps = { heading: string, children: React.ReactNode };

/** Section: Component for styling a section (e.g. About, Projects, etc.) */
export default function Section({ heading, children }: tSectionProps) {
  return (
    <div
      className="md:w-3/4 flex" //style section width here
    >
      <SectionHeading heading={heading}/>
      <div>{children}</div>
    </div>
  )
}