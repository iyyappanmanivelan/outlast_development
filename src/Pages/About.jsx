import React from "react";
import Banner from "../Commom/Banner";
import { AboutData } from "../Constant/About.constant";
import Whychoose from "../Components/Whychoose";
import Ourstory from "../Components/Ourstory";
import Ourvalues from "../Components/Ourvalues";
import Ourcoach from "../Components/Ourcoach";
import Unique from "../Components/Unique";
import Whyjoin from "../Components/Whyjoin";
import Joinus from "../Components/Joinus";
import PixelTransition from "../Animation/Pixeltransistion";

function About() {
  return (
    <>
      <Banner title={"About Us"} content={"Home | About Us"} />
      <Whyjoin />

      <div className="abt-contnet updown-space text-center text-light abbg position-relative">
        <div
          className="position-absolute w-100"
          style={{ zIndex: 1, left: "0px", top: "15%" }}
        >
          <div className="container">
            <div className="abt-title d-flex justify-content-center">
              <h2
                data-aos="zoom-in-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                " You can't Win Unless you Learn How to Lose "
              </h2>
            </div>
            <div className="abt-info d-flex justify-content-center my-5">
              <h6   data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">{AboutData?.Intro}</h6>
            </div>
          </div>
        </div>
        <div className="overlay7 position-absolute "></div>
      </div>


      <Whychoose data={AboutData?.Why_Choose} />

      <Ourstory data={AboutData?.Our_story} />

      
      <Ourvalues
        data={AboutData?.Our_values}
        philo={AboutData?.Our_philosophy}
      />

      <Ourcoach coach={AboutData?.Our_coach?.images} />


      <Joinus />
    </>
  );
}

export default About;
