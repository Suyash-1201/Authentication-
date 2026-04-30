import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


const Protectedroute = ({children}) => {
  const [data,setdata]=useState(JSON.parse(localStorage.getItem("login"))||{});
  
  
  
  if(!data){
    return <Navigate to="/" replace/>
  }

  if(data.role!="admin"){
     return <Navigate to="/dash" replace/>
  }

  return children
 
}

export default Protectedroute
