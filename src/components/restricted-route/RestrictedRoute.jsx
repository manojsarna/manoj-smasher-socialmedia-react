import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export function RestrictedRoute() {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  return user ? (
    <Navigate
      to={location.state !== null ? location.state.from.pathname : "/home"}
      state={{ from: location }}
      replace
    />
  ) : (
    <Outlet />
  );
}
