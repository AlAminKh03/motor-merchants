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
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../../firebase.config";
import useToken from "../Hooks/useToken";
import { useRouter } from "next/router";

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
        }
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  },
  signOutUser: () => {
    return signOut(auth);
  },
  resetPassword: (email: string) => {
    return sendPasswordResetEmail(auth, email);
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
  const [googleUser, setGoolseUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const token = useToken(user?.email);

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
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;
          const user = result.user;
          const userInfo = {
            userName: user.displayName,
            email: user.email,
          };
          fetch("https://motor-merchants-server.vercel.app/user", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              user.email && setGoolseUser(user.email);
            })
            .catch((err) => {
              console.log("err", err);
            });
        }
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("error", error);
      });
  };
  // signingOut User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // resetting password
  const resetPassword = (email: string) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  // persisting Users  [DONE]
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsbscribe();
  }, [auth]);
  console.log(user);
  const authInfo = {
    createUser,
    signInUser,
    user,
    manageUser,
    signOutUser,
    signInWithGoogle,
    loading,
    setLoading,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
