import Section from "./ui/Section";
import Image from "next/image";
import BrandLogos from "./BrandLogos";

/** About section.
 * 
 * Props:
 * - none
 * 
 * State:
 * - none
 * 
 * App -> About -> { Hi section, Previously section }
 */
export default function About() {
  return (
    <section className="About" id="about">
      {/* Insert Image component here */}
      <Section heading="Hi!" id="about-hi">
        <p>
          User-centric software engineer with strong project ownership and
          and collaboration skills from previous experience in UX design, 
          creative advertising, and education. I combine my UI/UX expertise to
          deliver featuers that exceed expectations, focusing on well-designed,
          robustly tested, and scalable code.
        </p>
        <p>🤝 <strong>I start every task by asking questions and listening</strong>,
         to ensure I understand the problem completely before implementing a solution.</p>
        <p>🗺️ <strong>Adept at taking full ownership of projects</strong> and
         breaking down complex, difficult goals into manageable tasks with
         clear documentation and defined next steps.</p>
        <p>🎨 <strong>Leveraging hands-on enterprise UI/UX experience</strong>,
         I ensure designers understand technical limits without jargon, making
         sure no design details fall through the cracks during development.</p>
        <p>🥳 <strong>I take the work seriously but not myself.</strong> I
         celebrate others on my team and handle difficult situations with humor,
         actively boosting morale by finding the fun in small things.</p>
        <p>📚 <strong>I foster a continuous learning culture</strong> to elevate
         team performance and adhere to best practices by actively asking
         questions, promoting knowledge sharing.</p>
      </Section>
      <Section heading="Previously..." id="about-previously">
        <p>
          I designed and taught K-12 lesson plans across six Japanese public
          schools, successfully operating in a 100% Japanese workplace after
          self-teaching N3 Japanese and business etiquette.
        </p>
        <p>
          I&apos;ve spearheaded design and branding for interactive digital
          platforms, web + television animation, live events, photo shoots,
          installations, digital + print media campaigns, and more as Art
          Director at Black Math Inc. I’ve been privileged to work with clients 
          such as:
        </p>
        <BrandLogos />
      </Section>
    </section>
  );
}
