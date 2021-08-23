// This came from auth0 Docs
// https://manage.auth0.com/dashboard/us/dev-b-6iwqw4/applications/eVYRk5qG0s5Fxd7FHZldzgDDfPR0cN8E/quickstart

import React from "react";
import Button from "react-bootstrap/Button"
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
