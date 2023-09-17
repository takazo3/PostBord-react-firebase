import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "./login-out.css"




export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = async() => {
    await signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("isAuth", true); 
      const user = result.user;
      setIsAuth(true);
      navigate("/");

    })
  }
  return (
    <div className="container-in">
      <h1 className="title-in">LOGIN TO START</h1>
      <button onClick={loginWithGoogle} className='btn-in'><img src="btn_google.png" /></button>
    </div>
  )
}
