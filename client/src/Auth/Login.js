import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Profile from "./Profile";

const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();

  return (
   <>
    {!user ? <button onClick={() => loginWithRedirect()}>Log In</button> : 
    <Profile />}
   </>
   
    )
    
};

export default LoginButton;