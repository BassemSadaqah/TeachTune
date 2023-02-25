import React from 'react'
import SignupForm from '../components/SignupForm'
import { Navigate } from 'react-router-dom'
function Signup({user}) {
  if (user) {
    return <Navigate to="/" />
  }
  return (
    <SignupForm/>
    )
}

export default Signup