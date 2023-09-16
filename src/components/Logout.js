import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "./login-out.css"


export const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    }
    )}
  return (
    <div className="container">
      <h1 className='logout'>Log Out</h1>
      <button onClick={logout} className='btn-out'>Log Out</button>
    </div>
  )
}

