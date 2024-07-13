import {Check} from 'lucide-react'
// import { Link } from 'react-router-dom'

export default function Pricing() {
  const pricing=[
    {
      imgUrl:"./pricing.jpg",
      title:"QUETERLY",
      price:18000,
      length:3,
    },
    {
      imgUrl:"./pricing.jpg",
      title:"HALF YEARLY",
      price:34000,
      length:6,
    },
    {
      imgUrl:"./pricing.jpg",
      title:"YEARLY",
      price:60000,
      length:12,
    },
   
  ]
  return (
    <div>
      <section className="pricing">
        <h1>Ug Fitness plan</h1>
        <div className="wrapper">
          {
            pricing.map((item,id)=>{
              return(
                <div className="card" key={id}>
                  <img src={item.imgUrl} alt={item.title} />
                 <div className="title">
                 <h1>{item.title}</h1>
                 <h1>PACKAGE</h1>
                  <h3>{item.price}</h3>
                  <p>For {item.length} Month</p>
                 </div>
                 <div className="description">
            <p>     <Check/> equipment</p>
            <p>     <Check/> All day free training</p>
            <p>     <Check/> Free rest room</p>
            <p>     <Check/> 24*7 Skilled Support</p>
            <p>     <Check/> 20 Days freezing option</p>
            {/* <Link to={"/"}>Join Now</Link> */}
                 </div>
               
                  </div>
              )
          })}
        </div>
      </section>
    </div>
  )
}
