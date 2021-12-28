import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };

  return { logout };
};

export default useLogout;
