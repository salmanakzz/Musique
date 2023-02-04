import { useContext, useEffect, useState } from "react";
import { ContextSong } from "../store/store";
import { TokenCheck } from "./TokenCheck";

export const PrivateRoute = ({ login }) => {
  const { token, setToken, auth, setAuth } = useContext(ContextSong);

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
  }, [token]);
  return auth && <TokenCheck token={token} login={login} />;
};
