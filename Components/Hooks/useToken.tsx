import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useToken = (email: string) => {
  const [token, setToken] = useState<string>("");
  console.log("from outsdie of token function ", email);
  if (email) {
    useEffect(() => {
      console.log("from inside of token function ", email);
      fetch(`http://localhost:8000/user/getJwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            const accessToken = data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken);
            console.log("token from inside", token);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${err}`);
        });
    }, [email]);
  }
  console.log("token", token);
  return [token];
};

export default useToken;
