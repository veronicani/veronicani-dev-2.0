import CredentialsCopy from "./CredentialsCopy";

type tCredentials = {
  username: string,
  password: string,
}

/** Credentials w/ labels (i.e. username, password).*/
export default function Credentials({ username, password }: tCredentials ) {
  return (
    <div
      className="flex flex-wrap gap-x-4 gap-y-1"
    >
      <div className="flex gap-x-2 text-gray-dark font-mono">
        <span>username:</span>
        <CredentialsCopy classes="px-4" credential={username} />
      </div>
      <div className="flex gap-x-2 text-gray-dark font-mono">
        <span>password:</span>
        <CredentialsCopy classes="px-4" credential={password} />
      </div>
    </div>
  );
}
