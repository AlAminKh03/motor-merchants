import React, { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Contexts/AuthProvider";
import { useRouter } from "next/router";
import Loading from "../Loading/Loading";

type Props = {};

const AdminROute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const router = useRouter();
  if (loading || isAdminLoading) {
    return <Loading />;
  }
  if (isAdmin) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  if (!isAdmin) {
    router.push("/");
  }
  return null;
};

export default AdminROute;
