import React from "react";
import { Route, Navigate } from "react-router-dom";
export default function PrivateRoute(Component) {
  const token = true;

  return token != null ? <Component /> : <Navigate to="/" />;
}
