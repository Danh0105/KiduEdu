import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, allowedRoles }) {
  const role = localStorage.getItem('role');
  const BASENAME = '/KiduEdu';
  if (!role || !allowedRoles.includes(role)) {
    return window.location.href = `${BASENAME}/login`;;
  }
  return children;
}
