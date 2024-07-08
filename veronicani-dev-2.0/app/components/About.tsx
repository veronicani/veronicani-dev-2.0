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
          I&apos;m a multi-disciplinary front-end software engineer and designer,
          with a 5+ year background in illustration, creative advertising,
          motion graphics, and mobile games. Currently working on UI development
          at Naviguide Inc.
        </p>
        <p>
          I&apos;m here to bridge the gap between engineering and design needs during
          a product&apos;s development cycle, and contribute to products with a
          design-first methodology to deliver impeccable user experiences.
        </p>
      </Section>
      <Section heading="Previously..." id="about-previously">
        <p>
          I&apos;ve spearheaded design and branding for interactive digital
          platforms, web + television animation, live events, photo shoots,
          installations, digital + print media campaigns, and more as Art
          Director at Black Math, Inc.
        </p>
        <p>I’ve been privileged to work with clients such as:</p>
        <BrandLogos />
      </Section>
    </section>
  );
}
