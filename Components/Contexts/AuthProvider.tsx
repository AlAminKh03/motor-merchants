import React, { ReactNode, createContext } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase.config";

interface FunctionProps {
  children: React.ReactNode;
}
const auth = getAuth(app);
const AuthContext = createContext({});
const AuthProvider: React.FC<FunctionProps> = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    createUser,
    signUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
