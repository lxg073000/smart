import { useState } from "react";

//firebase imports
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const useSignup = () => {
  const [error, setError] = useState(null);

  const signUp = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => setError(err.message));
  };
  return { error, signUp };
};

export default useSignup;
