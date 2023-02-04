import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const TokenCheck = ({ token, login }) => {
  
  return login ? (
    token ? (
      <Navigate to="/home" />
    ) : (
      <Outlet />
    )
  ) : token ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
