import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const TokenCheck = ({ token }) => {
    console.log(token,"to")
  return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
};
