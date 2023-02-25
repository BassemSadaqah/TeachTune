import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";
import { userContext } from '../userContext';

function ProtectedRoute({children}) {
  const user=useContext(userContext)
  console.log(user)
    if (!user) {
        return <Navigate to="/login" />;
    }
  return children
}

export default ProtectedRoute