import React, { createContext, useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
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
const provider = new GoogleAuthProvider();
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
  signInWithGoogle: () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const user = result.user;
          console.log("form google", token);
          console.log("form google", user);
        }
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  },
  signOutUser: () => {
    return signOut(auth);
  },
  loading: true,
  setLoading: (value: boolean) => {},
});

const AuthProvider: React.FC<FunctionProps> = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  // for signing up [DONE]
  const createUser = async (email: string, password: string) => {
    setLoading(true);
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
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // keeping url or name stuff like these  [DONE]
  const manageUser = (userInfo: {}) => {
    setLoading(true);
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, userInfo);
    }
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const user = result.user;
        }
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };
  // signingOut User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // persisting Users  [DONE]
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsbscribe();
  }, [auth]);

  const authInfo = {
    createUser,
    signInUser,
    user,
    manageUser,
    signOutUser,
    signInWithGoogle,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
