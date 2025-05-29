import React from "react";
import { useNavigate } from "react-router-dom";

function Banner({ title, content }) {


  const map = content.split('|')
  const router = useNavigate()


  return (
    <section>
      <div className="container-fluid p-0">
        <div className="about-banner position-relative">
          <div className="about-img position-relative">
            <img src="\assets\grass.jpg" className="w-100" />
            <div className="overlay2 position-absolute"></div>
          </div>
          <div className="about-title position-absolute">
            <h3 className="text-center">{title}</h3>
            <div className="d-flex justify-content-center gap-2">
               <div style={{cursor:"pointer"}} onClick={()=>{router('/')}}>{map[0]}</div>
               <div>|</div>
               <div>{map[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
