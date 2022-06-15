import React from "react";
import { Navigate } from "react-router";
import TokenService from "../TokenService/TokenService";

const PrivateRoute = ({ children }: any) => {
  const auth = TokenService.GetAccessToken();

  return Object.keys(auth).length !== 0 ? children : <Navigate to="/Form" />;
};
export default PrivateRoute;
