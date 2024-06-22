import CredentialsCopy from "./CredentialsCopy";

type tCredentials = {
  username: string,
  password: string,
}

/** Credentials w/ labels (i.e. username, password).*/
export default function Credentials({ username, password }: tCredentials ) {
  return (
    <div
      className="md:w-3/4 flex"
    >
      <div>
        <p>username:</p>
        <CredentialsCopy credential={username} />
      </div>
      <div>
        <p>password:</p>
        <CredentialsCopy credential={password} />
      </div>
    </div>
  );
}
