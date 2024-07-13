// import React from 'react'
import { useState } from "react"
import {Loader} from "lucide-react"
import { toast } from "react-toastify"
import axios from "axios"
export default function Login() {
  const [name,setName]=useState("Johan")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("Logined successfully")
  const [loading,setLoiading]=useState(false)

  const sendMail=async(e)=>{
    e.preventDefault()
    setLoiading(true)
  try {
    const {data}=await axios.post(
      "http://localhost:4000/send/mail",
      {
        name,
        email,
        message
      },
      {
        withCredentials:true,
        headers:{
          "Content-Type":"application/json",
        }
      },
    )
    setEmail(" ")
    setMessage("   ")
    setName(" ")
    toast.success(data.message)
    setLoiading(false)
  } catch (error) {
    setLoiading(false)
    toast.error(error.response.data.message)    
  }
      }
  return (
    <div className="mx-auto m-5 p-5 w-50 bg-black rounded text-white">
      <h1 className="text-center m-3">Login Page</h1>
      <form onSubmit={sendMail}>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    onChange={(e)=>{setEmail(e.target.value)}}
    />
    <div id="emailHelp" className="form-text text-white">{`We'll`} never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className=" container mt-5 ms-5 mb-3 px-5">
<button type="submit" className="btn btn-primary ms-5 px-5 py-2" 
  onClick={()=>setLoiading(true)}>

  {loading&& <Loader size={20} color="white"/>  }
    Login</button>
</div>
</form>
    </div>
  )
}
