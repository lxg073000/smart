import { createContext, useReducer, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

// initialize AuthContext object with createContext Hook
export const AuthContext = createContext();

// Create authReducer and switch cases for LOGIN, LOGOUT, and IS_READY
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };

    // Determines if firebase has checked for an initial logged in user
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

// Initialize AuthContextProvider functonal component & template.
export const AuthContextProvider = ({ children }) => {
  // Initalize state variable and dispatch functions from useReducer Hook.
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    /* authIsReady set to false to indicate Firebase has not been checked for
     * an initial logged in user */
    authIsReady: false,
  });

  useEffect(() => {
    // fires on mount to check Firebase auth for a logged in user.
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      // unsubscribe to onAuthStateChanged to keep from refiring
      unsub();
    });
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
