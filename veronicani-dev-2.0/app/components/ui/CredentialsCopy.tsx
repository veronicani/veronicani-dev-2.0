/** A credential that can be copied to clipboard. 
 * 
 * Props:
 * - credential: username / password / email
*/
type tCredentialsCopyProps = { credential: string, classes: string }
export default function CredentialsCopy({ classes, credential }: tCredentialsCopyProps) {
  return (
    <p
      className={`${classes} outline outline-1 outline-gray-400 rounded text-blue-500`}
    >
      {credential}
    </p>
  );
}
