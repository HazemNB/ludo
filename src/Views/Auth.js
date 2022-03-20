import React from 'react'
import Register from '../Components/Auth/Register'
import { Navigate } from 'react-router-dom'

const Auth = ({CurrentUser}) => {
  return (
    <>{CurrentUser ? <Navigate to="/Home" /> : <Register/> }</>
  )
}

export default Auth