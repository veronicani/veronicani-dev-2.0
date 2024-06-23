import SectionHeading from "./SectionHeading";

type tSectionProps = { id: string, heading: string, children: React.ReactNode };

/** Section: Component for styling a section (e.g. Hi, Previously, Projects, etc.)
 * 
 * Props:
 * - id: id for navigation to jump to 
 * - heading: title for the section
 * - children: children elements
 * 
 * State:
 * - none
 * 
 * App -> Section -> { SectionHeading, children }
 */
export default function Section({ id, heading, children }: tSectionProps) {
  return (
    <section
      id={id}
      className="flex-col py-5"
    >
      <SectionHeading heading={heading}/>
      <div>{children}</div>
    </section>
  )
}