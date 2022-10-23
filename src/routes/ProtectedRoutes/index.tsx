import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


function ProtectedRoutes() {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <p>carregando...</p>;
  }

  return user ? <Outlet/> : <Navigate to={"/"} />;
}

export default ProtectedRoutes;
