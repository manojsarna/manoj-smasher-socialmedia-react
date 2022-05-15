import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export function RestrictedRoute() {
  const { user } = useAuth();
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
