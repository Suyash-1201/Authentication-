import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/signup.css'
import {  Navigate, useNavigate } from 'react-router-dom';
import admin from './Adminutil'

const Signup = () => {
    const [info,setinfo]=useState({});
    const [login,setlogin]=useState({});
    const [users,setusers]=useState(JSON.parse(localStorage.getItem("data")) || [admin()]);
    const [logininfo,setlogininfo]=useState({})
    const [text,settext]=useState("");
    const [regax,setregax]=useState(false);
    const [showtext,setshowtext]=useState(false)
    const [toggle,settoggle]=useState(false);

    const navigate=useNavigate();

    

    const req=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const handeldata=(e)=>{
        const {name,value}=e.target;
        if(name==="password"){
            if(!req.test(value)){
                settext("Password must contain uppercase,lowercase,number and special symbol")
                setregax(true)
            }
            else{
                settext("")
                setregax(false)
            }
        }

        setinfo({
            ...info,
            role:"user",
            [name]:value
        })
    }

    // submit
    const submit=()=>{
        if(regax)return
        if(info.name==="" )return
        const getdata=JSON.parse(localStorage.getItem("data"))
       
       const found=getdata.some((item)=>item.email===info.email)
     
        if(found){
            alert("Try with another number or email")
            setinfo({
              name:"",
              email:"",
              password:""
             })
            return
        }
         setusers([
            ...users,
            info
            
        ])

        console.log(users)

           setinfo({
            name:"",
            email:"",
            password:""
           })
          
    }
    
    // login info
    const loginhandel=(e)=>{
         const {name,value}=e.target;

         const updated={
             ...login,
            [name]:value
         }

         if( updated.email==="admin12@gmail.com" &&  updated.password==="admin1212"){
            setlogin(admin())
         }
         else{
            setlogin(updated)
         }
            
         
        
    }

    // check login
    const check=()=>{
        const getdata=JSON.parse(localStorage.getItem("data"))
       const found=getdata.some((item)=>item.email===login.email && item.password===login.password);
        
       if(found){
        alert("Login Successful")
        localStorage.setItem("login",JSON.stringify(login))
        console.log(JSON.parse(localStorage.getItem("login")))
        navigate('/admin')
       }
       else{
        alert("Invalid Information")
        localStorage.removeItem("login")
       }

       setlogin({
        email:"",
        password:""
       })

      
    }

    useEffect(()=>{
        async function data() {
            try {
                const response=await axios.post('https://jsonplaceholder.typicode.com/posts',users)
                const data1=Object.values(response.data)
                const fildata=data1.filter(item=>item!==101 && typeof item ==="object")
                localStorage.setItem("data",JSON.stringify(fildata));

            } catch (error) {
                console.log(error)
            }
       }

       data();
    },[submit])



  return (
    <div className='auth'>
    <div className='container'>
       
        <div className='sign-up-box'>
         <h2>Create Account</h2>
        <input type="text" placeholder='name' value={info.name} name='name' onChange={handeldata} />
        <input type="text" placeholder='email' value={info.email} name='email' onChange={handeldata} />
        <input type="password" placeholder='password' value={info.password} name='password' onChange={handeldata} />
        {regax && text && <h4>
            {text}
            </h4>}
        <p onClick={()=>settoggle(true)}>You have already account</p>
        <button onClick={submit}>submit</button>
        </div>
        

        <div className='slider' style={{transform:toggle?"translateX(0)":"translateX(100%)"}}>
            <h1>{toggle?"Welcome Bcack!":"Hello Friend!"}</h1>
            <p>{toggle?"To keep connected with us please login with your personal info":"Enter your personal details and start journy with us"}</p>
            <button onClick={()=>settoggle(!toggle)}>{toggle?"SIGN IN":"SIGN UP"}</button>
        </div>

        <div className='sign-in-box'>
        <h2>Sign in</h2>
        <input type="text" placeholder='email' value={login.email} name='email' onChange={loginhandel} />
        <input type="password" placeholder='password' value={login.password} name='password' onChange={loginhandel} />
        <p onClick={()=>navigate('/forget')}>Forget password?</p>
        <button onClick={check}>login</button>
        </div>
    </div>
    </div>
  )
}

export default Signup
