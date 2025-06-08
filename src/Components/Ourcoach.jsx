import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Instagram, TelephoneFill } from "react-bootstrap-icons";
import { Autoplay } from "swiper/modules";

function Ourcoach({ coach }) {
  return (
    <section className="updown-space mainbgclr bgframe2">
      <div className="container position-relative">
        <div className="getknow d-flex justify-content-center align-items-center gap-3" 
        data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">Our Coaches</h4>
          </div>
        </div>

        <div className="Guided-title text-light text-center mt-5">
          <h4
          data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"> Guided by the Best in the Game </h4>
        </div>

        <div className="coach-slider mt-5 pt-md-5 pt-2">
          <Swiper
            autoplay={true}
            modules={[Autoplay]}
            breakpoints={{
              370: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
          >
            {coach?.map((player, i) => (
              <SwiperSlide>
                <div className="plyr-card position-relative mx-3 mx-md-0">
                  <div className="plyr-img text-center position-relative">
                    <img src={player?.img} className="img-fluid" />

                    <div
                      className="plyr-dtl position-absolute text-dark text-start"
                      style={{ zIndex: 1 }}
                    >
                      <h5>{player?.name}</h5>
                      <h6>{player?.role}</h6>
                    </div>

                    <div className="plyr-cont d-flex w-100 justify-content-center position-absolute gap-3">
                      <h6>
                        {" "}
                        <Instagram />
                      </h6>
                      <h6>
                        <TelephoneFill />
                      </h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Ourcoach;
