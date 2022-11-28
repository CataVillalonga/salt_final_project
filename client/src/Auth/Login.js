import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
   <>
   {!isAuthenticated ? <button className="button" onClick={() => loginWithRedirect({ returnTo: window.location.origin })}>Log In</button> : 
    <button className="button" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>}
   </>
   
    )
    
};


export default LoginButton;