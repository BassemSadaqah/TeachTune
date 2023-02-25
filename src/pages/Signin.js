import React from 'react'
import LoginForm from '../components/LoginForm'
import { Navigate } from 'react-router-dom'
function Signin({user}) {
  if(user){
    return <Navigate to="/" />
  }
  return (
    <LoginForm/>
  )
}

export default Signin