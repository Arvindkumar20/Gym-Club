// import React from 'react'
// import { Link } from 'react-router-dom'
import { Loader } from 'lucide-react'
import { useState } from 'react'

export default function SignUp() {
  const [loading,setLoiading]=useState(false)
  return (
    <div className="mx-auto my-5 p-5 w-50 bg-black rounded text-white">
      <h1 className="text-center m-3">Sign Up Page</h1>
      <form >

 <div className="mb-3 ">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" />
  </div>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text text-white">{`We'll `}never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
<div className=" container mt-5 ms-5 mb-3 px-5">
<button type="submit" className="btn btn-primary ms-5 px-5 py-2" 
  onClick={()=>setLoiading(true)}>

  {loading&& <Loader size={20} color="white"/>  }
    SignUp</button>
</div>

</form>

    </div>
  )
}
