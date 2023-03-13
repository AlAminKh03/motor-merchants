import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Router from "next/router";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.uid) {
      const from = Router.asPath;
      Router.push(`/login?from=${from}`);
    }
  }, [user]);
  if (user) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  console.log(user);

  if (loading) {
    return <Loading />;
  }

  return null;
};

export default PrivateRoute;
