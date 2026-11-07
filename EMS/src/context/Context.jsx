import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()

const Context = (props) => {

  const[userData,setUserData]=useState(null)
  useEffect(()=>{
    if (!localStorage.getItem("employees")) {
          setLocalStorage();
        }
  const {employees}=getLocalStorage()
  setUserData({employees})
  },[])
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {props.children}
      </AuthContext.Provider>
    </div>
  )
}

export default Context
