import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Router from "next/router";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsReady(true);
    }
  }, [loading]);
  useEffect(() => {
    if (!user?.uid && isReady) {
      const from = Router.asPath;
      Router.push(`/login?from=${from}`);
    }
  }, [user, isReady]);
  if (user) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  console.log(user);

  if (loading || isReady) {
    return <Loading />;
  }

  return null;
};

export default PrivateRoute;
