import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

//firebase imports
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        // dispatch LOGIN action object with a User payload
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => setError(err.message));
  };
  return { login, error };
};

export default useLogin;
