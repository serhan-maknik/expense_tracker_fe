import * as React from "react";
import { RouteProps, Navigate, Outlet } from "react-router-dom";
import { Category } from "../types/category";

const PrivateRouter: React.FC<any> = ({ redirectPath = "login", children }) => {
  const token = localStorage.getItem("token");
  // console.log("TOKEN", token);

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRouter;
