import { Link } from "react-router-dom"
import Profile from "../profile/Profile.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
// import { Link } from "lucide-react"
export default function Navbar() {
  const [searchValue,setSearchValue]=useState("")
const navigate=useNavigate()

  const searchHandler=async()=>{
    
   try{
    if(searchValue.length>0){
      await navigate(`/${searchValue}`
        ) 
   }
   else{
    toast.success("please enter a search value")
    }
    }
    catch(err){
      toast.error(err)
      }
      }



  
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-success text-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
{/* image of gym logo     */}
<span className="border border-1">
<img src="https://e7.pngegg.com/pngimages/240/627/png-clipart-gym-logo-mark-gym.png" className="rounded" style={{
  width: "50px",
  height: "50px",

}} alt="..."/>
</span>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/services"  >
          Services
          </Link>
          
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="/bmicalculator"  >
          BMI Calcolator
          </Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/plans">Plans</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search"
        onChange={(e)=>setSearchValue(e.target.value)}
        value={searchValue}  
        aria-label="Search"
        />
        <button
         className="btn btn-outline-warning text-center px-4" 
         type="submit"
          onClick={searchHandler}>Search</button>
      </form>
    </div>
              <span className="absolute -inset-1.5 ms-3 bg-dark rounded-circle">
              <Profile/>
                <img src={<Profile/>} alt="" />
              </span>     
  </div>
</nav>
    </div>
  )
}
