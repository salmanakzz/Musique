import { useEffect, useState } from "react";
import { TokenCheck } from "./TokenCheck";

export const PrivateRoute = () => {
  const [token, setToken] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }
    const getToken = getCookie("token");
    if (getToken) {
      setToken(true);
    }
    setAuth(true);
  }, []);
console.log(auth,"auth")
  return auth && <TokenCheck token={token}/>;
};
