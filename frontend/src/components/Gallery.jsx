// import React from 'react'

export default function Gallery() {
  const gallery=['bmi.jpg','img1.webp','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img8.jpg']
  return (
    <div>
      <section className="gallery">
        <h1>BETTER BEATS BEST</h1>
        <div className="images">
          <div>
            {gallery.slice(0,3).map((e,i)=>{
              return <>
              <img key={i} src={e} alt="gallery" />
              </>
            })
            }
          </div>
          <div>
            {gallery.slice(3,6).map((e,i)=>{
              return <>
              <img key={i} src={e} alt="gallery" />
              </>
            })
            }
          </div>
          <div>
            {gallery.slice(6,9).map((e,i)=>{
              return <>
              <img key={i} src={e} alt="gallery" />
              </>
            })
            }
          </div>
        </div>
      </section>
    </div>
  )
}
