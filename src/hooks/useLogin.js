import { useState } from "react";

//firebase imports
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setError(err.message));
  };
  return { login, error };
};

export default useLogin;
