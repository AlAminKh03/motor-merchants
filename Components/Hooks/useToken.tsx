import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useToken = (email: string) => {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    if (email) {
      console.log("from inside of token function ", email);
      fetch(
        `https://motor-merchants-server.vercel.app/user/getJwt?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            const accessToken = data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken);
          }
        })
        .catch((err) => {
          toast.error(`${err}`);
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
