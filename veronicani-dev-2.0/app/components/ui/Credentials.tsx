import CredentialsCopy from "./CredentialsCopy";

type tCredentials = {
  username: string,
  password: string,
}

/** Credentials w/ labels (i.e. username, password).*/
export default function Credentials({ username, password }: tCredentials ) {
  return (
    <div
      className="flex space-x-4"
    >
      <div className="flex space-x-2 text-gray-dark">
        <span>username:</span>
        <CredentialsCopy classes="px-4" credential={username} />
      </div>
      <div className="flex space-x-2 text-gray-dark">
        <span>password:</span>
        <CredentialsCopy classes="px-4" credential={password} />
      </div>
    </div>
  );
}
