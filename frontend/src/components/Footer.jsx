import Contact from "./Contact"
export default function Footer() {
  return (
    <div>
      <footer className="footer">
      <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       Fasilities
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show bg-dark text-light">
      <div className="accordion-body bg-black text-light">
        <strong>This is the first item is accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Fasilities
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse  bg-dark text-light">
      <div className="accordion-body  bg-black text-light">
      <strong>This is the first item is accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
     Services
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse ">
      <div className="accordion-body bg-black text-light">
        <strong>This is the third item s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="contact d-flex flex-wrap">
  <h1 className="text-center text-light mx-auto mt-5 mb-5" >Provide Feedback</h1>
  <div className="container-fluid bg-dark text-light">
    <div className="row">
      <div className="col-md-4 my-auto">
        <h3 className="text-center">Address</h3>
        <p className="text-center">1234 Main Street</p>
        <p className="text-center">City, State 12345</p>
        <p className="text-center">Phone: 123-456-7890</p>
        <p className="text-center">Email: info@yourdomain.com</p>
        </div>
        <div className="col-md-8 text-dark">
        <Contact/>
      </div>
    </div>
  </div>
</div>
<div className="email">
  <h4 className="text-light">Email</h4>
  <p className="text-light">info@gym.com</p>
</div>
      </footer>
    </div>
  )
}
