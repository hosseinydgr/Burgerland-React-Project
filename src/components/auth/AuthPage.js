import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthPage() {
  const [hasBeen, setHasBeen] = useState(true);
  return (
    <>
      {hasBeen ? (
        <SignIn switchPage={setHasBeen} />
      ) : (
        <SignUp switchPage={setHasBeen} />
      )}
    </>
  );
}
