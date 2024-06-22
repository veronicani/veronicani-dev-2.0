/** A credential that can be copied to clipboard. 
 * 
 * Props:
 * - credential: username / password / email
*/
export default function CredentialsCopy({ credential }: { credential: string }) {
  return (
    <div
      className="md:w-3/4 flex"
    >
      <p>{credential}</p>
    </div>
  );
}
