import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { Star, StarFill } from "react-bootstrap-icons";

function Testimonal() {
  return (
    <section className="">
      <div className="container-fluid p-0 ">
        <div className="testimonal position-relative">
          <div className="test-img position-relative">
            <img src="\assets\turf.jpg" className="img-fluid" />
            <div className="overlay2 position-absolute"></div>
          </div>
          <div className="testmonal-info position-absolute">
            <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-7 col-12 py-5">
                <div className="getknow d-flex align-items-center gap-3"  data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <div className="fticon">
                    <img
                      src="\assets\football-white.png"
                      className="img-fluid"
                    />
                  </div>
                  <div className="gt-title ">
                    <h4 className="m-0 text-light">Testimonals</h4>
                  </div>
                </div>
                <div className="test-title mt-3"  data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <h3>Don't Take Our Word for It, Hear Theirs</h3>
                </div>
                <div className="test-slider mt-5">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    speed={1500}
                    autoplay={{ delay: 2000 }}
                    modules={[Autoplay, EffectFade]}
                  >
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>"Outlast Football Academy has brought out the best in my child—both on and off the pitch. The coaching is professional, and the environment is inspiring."</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>" We’ve seen tremendous improvement in our child’s technical skills, confidence, and teamwork since joining Outlast. It’s more than just football—it’s personal growth. "</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>"The dedication of the coaches at Outlast is unmatched. They truly care about each player’s development and create a positive, motivating atmosphere."</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>"Outlast provides the perfect balance of discipline, fun, and skill development. My child is always excited for training and proud to be part of the academy."</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="test-slide1">
                        <div className="start d-flex align-items-center text-warning">
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                            <h5><StarFill/></h5>
                     
                        </div>
                        <div className="test-review text-light">
                            <p>"As parents, we feel confident knowing our child is being trained by passionate professionals who focus on long-term growth, not just short-term wins."</p>
                        </div>
                        <div className="test-revimg text-light d-flex align-items-center gap-3">
                            <div className="revimg">
                                <img src="\assets\pro-2.jpeg" className="img-fluid"/>
                            </div>
                            <div className="revname">
                                <h5 className="m-0">Jhon</h5>
                                <p>Founder of Chenniyan F.C.</p>
                            </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    
                  </Swiper>
                </div>
              </div>
              <div className="col-xl-6 col-md-5  pt-lg-5 mt-lg-4 pt-xl-0 mt-xl-0 ">
                <div className="test-poster text-center p-1 position-relative"  data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <img src="assets\about (2).png" className="img-fluid position-absolute"/>
                </div>
              </div>
            </div>
            </div>
      
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonal;
