import Section from "./ui/Section";
import CredentialsCopy from "./ui/CredentialsCopy";

/** Contact section.
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> Contact -> CredentialsCopy
 */
export default function Contact() {
  return (
    <Section heading="Let's Chat!" id="contact">
      <p>Feel free to say hi or ask any questions! I can be reached at:</p>
      <CredentialsCopy classes="inline-block py-2 px-4 my-3" credential="hello.veronicani@gmail.com" />
    </Section>
  );
}
