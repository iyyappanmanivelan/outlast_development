import React, { useEffect, useState } from "react";
import { Calendar } from "react-bootstrap-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { SwiperSlide, Swiper } from "swiper/react";
import moment from "moment";

function Latestnews({ blogs }) {
  return (
    <section className="updown-space mainbgclr">
      <div className="container">
        <div className="getknow d-flex justify-content-center align-items-center gap-3" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title ">
            <h4 className="m-0 cg">Our Lastes Blogs !</h4>
          </div>
        </div>
        <div className="latest-title my-4 text-center" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <h3 className="text-light">Check Out Our Latest News and Article</h3>
        </div>

        <div className="mt-5 pt-5">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              370: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            speed={1500}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay, EffectFade]}
          >
            {blogs?.map((data) =>
              data?.media_type == "IMAGE" ? (
                <SwiperSlide>
                  <div className="news-box bg-light mx-3 mx-sm-5 mx-md-0">
                    <div className="news-img text-center">
                      <img src={data?.media_url} className="img-fluid" />
                    </div>
                    <div className="news-content py-2">
                      <div className="news-time d-flex align-items-center gap-2">
                        <p>
                          <Calendar />
                        </p>
                        <p>{moment(data?.timestamp).format("DD MMMM, YYYY")}</p>
                      </div>
                      <h5>{data?.caption}</h5>
                      <p className="caption">{data?.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Latestnews;
