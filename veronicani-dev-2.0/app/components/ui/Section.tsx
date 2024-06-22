import SectionHeading from "./SectionHeading";

type tSectionProps = { heading: string, children: React.ReactNode };

/** Section: Component for styling a section (e.g. Hi, Previously, Projects, etc.)
 * 
 * Props:
 * - heading: title for the section
 * - children: children elements
 * 
 * State:
 * - none
 * 
 * App -> Section -> { SectionHeading, children }
 */
export default function Section({ heading, children }: tSectionProps) {
  return (
    <section
      className="md:w-3/4 flex" //style section width here
    >
      <SectionHeading heading={heading}/>
      <div>{children}</div>
    </section>
  )
}