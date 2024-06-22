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
    <Section heading="Let's Chat!">
      <p>Feel free to say hi or ask any questions! I can be reached at:</p>
      <CredentialsCopy credential="hello.veronicani@gmail.com"></CredentialsCopy>
    </Section>
  );
}
