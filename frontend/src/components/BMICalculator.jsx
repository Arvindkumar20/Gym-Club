// import React from 'react'

import { useState } from "react"
import { toast } from "react-toastify"

export default function BMICalculator() {
  const [hight,setHight]=useState()
  const [weight,setWeight]=useState()
  const [gender,setGender]=useState()
  const [bmi,setBmi]=useState()
  const calculateBmi=(e)=>{
e.preventDefault()
if(!hight|| !weight || !gender){
  toast.error("Please enter valid hight, weight and gender" )
  return

}


setBmi(weight/((hight/100)*(hight/100)).toFixed(2))
if(bmi<12.0){
  toast.success("Your BMI is "+bmi+" and you are underweight")
}
else if(bmi>12.0 && bmi<25.0){
  toast.success("Your BMI is "+bmi+" and you are normal")
  }
  else if(bmi>25.0 && bmi<30.0){
    toast.warning("Your BMI is "+bmi+" and you are overweight")
    }
    else if(bmi>30.0){
      toast.error("Your BMI is "+bmi+" and you are obese")
      }
        }

  return (
    <div>
      <section className="bmi">
        <h1>Body Mass Index Calculator</h1>
        <div className="container">
          <div className="wrapper">
            <form onSubmit={calculateBmi}>
              <div>
                <label htmlFor="hight">Hight (cm)</label>
                <input
                type="number"
                id="hight"
                value={hight}
                onChange={(e)=>setHight(e.target.value)}
                required
                />
                </div>
                <div>
                  <label htmlFor="weight">Weight (kg)</label>
                  <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e)=>setWeight(e.target.value)}
                required

                  />
                  </div>
                  <div>
                    <label htmlFor="gender">Gender</label>
                    <select
                    id="gender"
                    value={gender}
                    onChange={(e)=>setGender(e.target.value)}
                    >
                      <option value="gender">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      </select>
                      </div>
                      <button type="submit" >Calculate BMI</button>
           </form>
          </div>
          <div className="wrapper">
            <img src="./bmi.jpg" alt="bmi image" />
          </div>
        </div>
      </section>
    </div>
  )
}
