// import React from 'react'

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate();
  return (
    <div>

      <section className="hero">
        <div className="content">
          <div className="title">
            <h1 className="text-white fs-1 fw-bold">LET<>'</>S</h1>
            <h1 className="text-white fs-1 fw-bold">GET</h1>
            <h1 className="text-white fs-1 fw-bold">START  FITNESS JOURNEY</h1>

          </div>
          <div className="subtitle">
            <p className="text-light fs-6 fw-light">Your Fitness 
            journey will be start here</p>
            <p className="text-light fs-6 fw-light">Your Fitness 
            journey will be start here</p>
          </div>
          <div className="buttons">
            
            <button className="text-light btn btn-outline-warning " onClick={() => navigate("/login")}>
              <Link className="nav-link" to="/login">Login</Link></button>
            

            <button className=" text-light btn btn-outline-warning" 
            onClick={() => navigate("/signup")}            
            ><Link className="nav-link" to="/signup">Sign Up</Link></button>
          </div>
          </div>
      </section>
    </div>
  )
}
