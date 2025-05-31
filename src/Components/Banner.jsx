import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
function Banner() {
  return (
    <section className="banner position-relative">
      <div className="container-fluid p-0">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect={"fade"}
          speed={1500}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay, EffectFade]}
        >
          <SwiperSlide>
            <div className="banner_img position-relative">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban1.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_img">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban2.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_img">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban3.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_img">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban4.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_img">
              <div className="overlay position-absolute"></div>
              <img src="\assets\ban5.jpg" className="img-fluid" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="banner-content position-absolute">
        <div className="bc-1">
          <p style={{color:"#e0d39b"}}>Skills win games</p>
          <p style={{color:"#fff"}}>Mentality wins careers</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
