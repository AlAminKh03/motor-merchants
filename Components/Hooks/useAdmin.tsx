import React, { useEffect, useState } from "react";

type Props = {};

const useAdmin = (email: string) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAdminLoading, setIsAdminLoading] = useState<boolean>(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:8000/user/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
