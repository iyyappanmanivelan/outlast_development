import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import PixelTransition from "../Animation/Pixeltransistion";

function Ourvalues({ data , philo}) {
  return (
    <section className="updown-space ">
      <div className="container">
      <div className="getknow d-flex justify-content-center align-items-center gap-3">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">Values & philosophy</h4>
          </div>
        </div>

        <div className="value-space">

          <div className="values-title d-flex justify-content-center mt-5">
            <h4 className="text-center text-light">{philo}</h4>
          </div>

        <div className="row mt-4 pt-4">
            {data?.map((items, i) => (
              <div className="col-xl-3 col-md-6 col-6 d-lg-flex justify-content-center my-5 text-dark">
                <PixelTransition
                  firstContent={
                    <img
                      src={items?.img}
                      alt="default pixel transition content, a cat!"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor:"pointer",

                      }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                       background: "linear-gradient(#bc9c23, #e0d39b, #e0d39c)",

                      }}
                    >
                      <p
                        style={{
                          fontWeight: 900,
                          padding:"0px 15px",
                          fontSize: "18px",
                          color: "#000",

                        }}
                      >
                        {items?.content}
                       
                      </p>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

        </div>

            
          </div>
    
    </section>
  );
}

export default Ourvalues;
