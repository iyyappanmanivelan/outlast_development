import React, { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

function Gallery({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log("kenfkr", data);

  return (
    <section className="updown-space gbg position-relative">
      <div
        className="insta-post position-absolute w-100 "
        style={{ zIndex: 1 }}
      >
        <div className="container">
          <div className="getknow d-flex justify-content-center align-items-center gap-3">
            <div className="fticon">
              <img src="\assets\football-og.png" className="img-fluid" />
            </div>
            <div className="gt-title">
              <h4 className="m-0 cg">Our Latest Vlog's !</h4>
            </div>
          </div>

          <div className="gllery-slider pt-5">
            <div className="my-5">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {data?.map((item) =>
                  item?.media_type == "VIDEO" ? (
                    <SwiperSlide>
                      <div className="gallery-main text-center">
                        <video autoPlay loop src={item?.media_url} muted />
                      </div>
                    </SwiperSlide>
                  ) : null
                )}
              </Swiper>
            </div>
            <div>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                autoplay={true}
                breakpoints={{
                  390: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  576 :{
                     slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                  },
                }}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper"
              >
                {data?.map((item) =>
                  item?.media_type == "VIDEO" ? (
                    <SwiperSlide>
                      <div className="gallery-slider text-center">
                        <video src={item?.media_url} muted/>
                      </div>
                    </SwiperSlide>
                  ) : null
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay2 position-absolute"></div>
    </section>
  );
}

export default Gallery;
