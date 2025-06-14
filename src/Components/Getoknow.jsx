import React, { useState } from "react";
import { PlayCircleFill } from "react-bootstrap-icons";

function Getoknow() {
  const [play, setplay] = useState(false);

  return (
    <section className="updown-space ">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="getknow d-flex align-items-center gap-3">
                <div className="fticon">
                  <img src="\assets\football-og.png" className="img-fluid" />
                </div>
                <div className="gt-title">
                  <h4 className="m-0 cg"> Get To Know US</h4>
                </div>
              </div>
              <div className="getknow-sub py-3 text-light">
                <h3 className="py-lg-2 py-3">
                  We Don't Just Coach, We Craft World Class-Champions
                </h3>
                <p>
                  At Outlast football is a lifestyle rooted in discipline,
                  passion, and purpose. We go beyond training shaping athletes
                  into world-class players on and off the field. We focus on
                  skill mastery, tactical intelligence, and mental resilience.
                  Every session is driven by excellence, unlocking true
                  potential in every player.
                </p>
              </div>
            </div>

            <div
              className="head-coach"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="info">
                <p>
                  Outlast Academy to help young players grow into confident,
                  disciplined athletes. Our academy is grounded in values of
                  hard work, respect, and the pursuit of excellence. We don’t
                  just train players we develop leaders prepared for the highest
                  levels of the game. Whether your goal is to go pro or grow
                  through football, your journey starts here.
                </p>
              </div>
              <div className="hc-profile d-flex align-items-center gap-3 py-2">
                <div className="hc-img">
                  <img src="\assets\founder.png" className="img-fluid" />
                </div>
                <div className="hc-position">
                  <h3>Muzhamil Rashid</h3>
                  <h5>Founder</h5>
                  <h6>(OUTLAST ACADEMY)</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div
              className="ch-tst position-relative h-100"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {play ? (
                <video
                  className="w-100 h-100 px-md-3"
                  src="video\about_outlast.mp4"
                  loop
                  autoPlay
                  controls
                  muted
                />
              ) : (
                <>
                  <img
                    src="\assets\thumbnail.png"
                    className="img-fluid h-100 px-md-3"
                  />
                  <div
                    className=" plybtn position-absolute"
                    onClick={() => {
                      setplay(true);
                    }}
                  >
                    <PlayCircleFill />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Getoknow;
