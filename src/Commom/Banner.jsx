import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Banner({ title, content }) {


  const map = content.split('|')
  const router = useNavigate()

  const {pathname} = useLocation()


  return (
    <section>
      <div className="container-fluid p-0">
        <div className="about-banner position-relative">
          <div className="about-img position-relative">
            {
              pathname == "/about" ? <img src="assets\about-banner.jpg" className="w-100" /> : 
              pathname == "/programm" ? <img src="assets\team1.jpg" className="w-100" /> :
              pathname == "/league" ? <img src="assets\league-banner.jpg" className="w-100" /> :
            <img src="\assets\grass.jpg" className="w-100" />

            }
        
            <div className="overlay7 position-absolute"></div>
          </div>
          <div className="about-title position-absolute">
            <h3 className="text-center">{title}</h3>
            <div className="d-flex justify-content-center gap-2">
               <div style={{cursor:"pointer" , fontSize:"23px"}} onClick={()=>{router('/')}}>{map[0]}</div>
               <div style={{fontSize:"23px"}}>|</div>
               <div style={{fontSize:"23px"}}>{map[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
