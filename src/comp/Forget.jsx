import React, { useEffect, useState } from 'react'
import '../css/forget.css'
import axios from 'axios';

const Forget = () => {
    const [info,setinfo]=useState({});
    const [userdata,setuserdata]=useState([]);
    const [found,setfound]=useState(false);
    const [regax,setregax]=useState(false);
    const [text,settext]=useState("");

    const req=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const handelinfo=(e)=>{
       const {name,value}=e.target;
       if(name==="password"){
        if(!req.test(value)){
            setregax(true)
            settext("Password must contain uppercase,lowercase,number and special symbol")
        }
        else{
            setregax(false)
            settext("")
        }
       }
       setinfo({
        ...info,
        [name]:value
       })
    }

    const check=()=>{
        if(regax)return

        const getdata=JSON.parse(localStorage.getItem("data")).filter(value=> value && typeof value ==="object")
        console.log("getdata "+getdata)
      
           const updatedata=getdata.map(item=>{

            if(item.email===info.email){
                setfound(false)
                return{
                    ...item,
                    password:info.password
                }
            }
            
            else if(typeof item==="object" && item.length >=2) {
                setfound(true)
                 return item
               }
               
            
           })

           if(found){
            alert("invalid email")
           }

           setinfo({
            email:"",
            password:""
           })
            
           setuserdata(updatedata)
           
    }

   useEffect(()=>{
     async function data() {
            try {
                const response=await axios.post('https://jsonplaceholder.typicode.com/posts',userdata)

                const data1=Object.values(response.data)
                const fildata=data1.filter(item=>item!==101 && typeof item ==="object")
                localStorage.setItem("data",JSON.stringify(fildata));
                

            } catch (error) {
                console.log(error)
            }
       }

       data();
   },[userdata])
  return (
    <div className='forget-auth'>
    <div className='forget-box'>
        <h2>Reset Password</h2>
        <h5>Enter your register email and reset password</h5>
        <input type="text" placeholder='email' value={info.email} name='email' onChange={handelinfo}  />
        <input type="password" placeholder='Password' value={info.password} name='password' onChange={handelinfo} />
        {regax && text && <h4>
            {text}
            </h4>}
        <button onClick={check}>Reset</button>
    </div>
    </div>
  )
}

export default Forget
