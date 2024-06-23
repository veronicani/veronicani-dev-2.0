/** A credential that can be copied to clipboard. 
 * 
 * Props:
 * - credential: username / password / email
*/
export default function CredentialsCopy({ credential }: { credential: string }) {
  return (
    <div
      className="outline outline-2 outline-gray-light px-1 rounded text-primary-blue"
    >
      {credential}
    </div>
  );
}
