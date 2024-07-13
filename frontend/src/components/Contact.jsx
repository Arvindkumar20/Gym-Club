// import React from 'react'

import { useState } from "react"
import {Loader} from "lucide-react"
import { toast } from "react-toastify"
import axios from "axios"
export default function Contact() {
  const [name,setName]=useState(" ")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState(" ")
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
    <div>
      <section className="contact">
<form onSubmit={sendMail}>
<h1>Type Your Message</h1>
<div>
<label htmlFor="Name">Name</label>
<input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
</div>
<div>
<label htmlFor="Email">Email</label>
<input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
</div>
<div>
<label htmlFor="Message" >Message</label>
<input type="text" onChange={(e)=>setMessage(e.target.value)} value={message}/>
</div>
<button type="submit" disabled={loading} style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  gap:'15px'
}}
    >
  {loading&& <Loader size={20} color="white"/>  }
Send Message
 </button>
</form>
      </section>
    </div>
  )
}
