import { useState } from "react";

//firebase imports
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signUp = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => setError(err.message));
  };
  return { error, signUp };
};

export default useSignup;
