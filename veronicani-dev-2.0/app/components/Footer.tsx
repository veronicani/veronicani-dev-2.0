/** Footer.
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> Footer
 */
export default function Footer() {
  return (
    <footer className="lg:mt-12">
      <small className="text-gray-light lg:opacity-50 lg:hover:opacity-100
        transition motion-reduce:transition-none"
      >
        Drafted in Figma, built with Next.js and Tailwind. Deployed with Vercel.
        Bootstrapped with <i className="bi bi-stars"></i> by yours truly 2024.
      </small>
    </footer>
  );
}
