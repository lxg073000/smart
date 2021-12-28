import { useState } from "react";

//firebase imports
import { gAuth, auth } from "../firebase";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

const useGoogleLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const googleLogin = () => {
    console.log("google login");
    signInWithRedirect(auth, gAuth).then();
    getRedirectResult(auth)
      .then((res) => {
        console.log(res);
        // dispatch LOGIN action object with a User payload
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => setError(err.message));
  };
  return { error, googleLogin };
};

export default useGoogleLogin;
