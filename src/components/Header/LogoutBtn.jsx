import React from 'react'
import { useDispatch } from 'react-redux'
import authServiceConfig from "../../appwrite/config"
import authServiceAuth from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
 
const LogoutBtn = () => {
 
  const dispatch = useDispatch();

  const handleLogout = () => {

    authServiceAuth.logout().then((data) => {
        console.log("Logout success --> ",data);
        dispatch(logout())
    })

  }

  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={handleLogout}    
    >Logout</button>
  )
}

export default LogoutBtn