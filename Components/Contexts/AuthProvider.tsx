import React, { createContext, useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "../../firebase.config";

interface FunctionProps {
  children: React.ReactNode;
}
interface OnAuthStateProps {
  [key: string]: any;
}
const defaultOnAuthStateProps: OnAuthStateProps = {
  user: undefined,
};
const auth = getAuth(app);
export const AuthContext = createContext({
  createUser: async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    sendEmailVerification(user);
    return user;
  },
  signInUser: (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  },
  user: defaultOnAuthStateProps,
  manageUser: (userInfo: {}) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, userInfo);
    }
  },
  signOutUser: () => {
    return signOut(auth);
  },
});

const AuthProvider: React.FC<FunctionProps> = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<any>();
  // for signing up [DONE]
  const createUser = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("from user credential", userCredential);
    await sendEmailVerification(user);
    return user;
  };
  // for siging up
  const signInUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // keeping url or name stuff like these  [DONE]
  const manageUser = (userInfo: {}) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, userInfo);
    }
  };
  // signingOut User
  const signOutUser = () => {
    return signOut(auth);
  };
  console.log("from auth user ", auth.currentUser);
  // persisting Users  [DONE]
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsbscribe();
  }, [auth]);

  console.log("from user", user);

  const authInfo = {
    createUser,
    signInUser,
    user,
    manageUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
