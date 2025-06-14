import { useInView } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useLocation, useNavigate } from "react-router-dom";

function Whyjoin() {
  const { pathname } = useLocation();

  const router = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: "true",
    threshold: 0.5,
  });

  return (
    <section className="updown-space">
      <div className="why-join">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="whyjoin-img"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <img src="assets\whyjoin.jpg" className="img-fluid" />
              </div>
            </div>
            <div
              className=" col-lg-6"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <div className="getknow d-flex align-items-center gap-3 mt-5 mt-lg-0 ">
                <div className="fticon">
                  <img src="\assets\football-og.png" className="img-fluid" />
                </div>
                <div className="gt-title">
                  <h4 className="m-0 cg"> Why Join Us</h4>
                </div>
              </div>
              <div className="gt-subtitle py-4 text-light">
                <h3>Where Football Meets Personal Growth</h3>
              </div>
              <div className="gt-prara text-light">
                <p>
                  We train more than just football skills we build discipline,
                  mental strength, and true team spirit. Our players learn to
                  stay strong, support each other, and never give up on the
                  field and in life. Join us to grow as a player, a teammate,
                  and a leader.
                </p>
              </div>
            </div>
          </div>
          <div className="pg position-absolute d-none d-lg-block" ref={ref}>
            <div className="player-growth">
              <div className="plyr text-center">
                <h4>
                  <CountUp end={600} duration={5} /> +{" "}
                </h4>
                <p>Active Player</p>
              </div>
              <div className="plyr acplyr text-center">
                <h4>
                  <CountUp end={20} duration={5} /> +{" "}
                </h4>
                <p>Active Coach</p>
              </div>
              <div className="plyr text-center">
                <h4>
                  <CountUp end={11} duration={5} /> +{" "}
                </h4>
                <p>Active Branch</p>
              </div>
            </div>
          </div>
          <div className="pg d-lg-none d-block" ref={ref}>
            <div className="player-growth">
              <div className="plyr text-center">
                <h4>
                  <CountUp end={600} duration={5} /> +{" "}
                </h4>
                <p>Active Player</p>
              </div>
              <div className="plyr acplyr text-center">
                <h4>
                  <CountUp end={20} duration={5} /> +{" "}
                </h4>
                <p>Active Coach</p>
              </div>
              <div className="plyr text-center">
                <h4>
                  <CountUp end={11} duration={5} /> +{" "}
                </h4>
                <p>Active Branch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whyjoin-list my-xl-3 my-5 text-light">
        <div className="container">
          <div className="row">
            <div className=" col-xxl-4 col-xl-6 col-lg-6 col-12 d-flex justify-content-md-start justify-content-center">
              <div
                className="wyj-box position-relative"
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <h2>Certified Coaches</h2>
                <p>Our Coaches Certified by AIFF & AIFC</p>
                <div className="wyj-icon position-absolute">
                  <img src="\assets\coach.png" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className=" col-xxl-4 col-xl-6 col-lg-6 col-12 d-flex justify-content-md-center justify-content-center ">
              <div
                className="wyj-box  position-relative"
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <h2>Specialized Training</h2>
                <p>Coaches Customized Sessions To Align With Daily Targets</p>
                <div className="wyj-icon position-absolute">
                  <img src="\assets\mentoring.png" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className=" col-xxl-4 col-xl-6 col-lg-6 col-12 d-flex justify-content-md-end justify-content-center">
              <div
                className="wyj-box  position-relative "
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <h2>Infrastructure</h2>
                <p>FIFA Standard Artificial Turf Grounds</p>
                <div className="wyj-icon position-absolute">
                  <img src="\assets\stadium.png" className="img-fluid" />
                </div>
              </div>
            </div>
            {pathname == "/about" ? (
              <>
                <div className=" col-xxl-4 col-xl-6 col-lg-6 col-12 d-flex justify-content-md-end justify-content-center">
                  <div className="wyj-box position-relative" 
                   data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                    <h2>Player Evaluation Report</h2>
                    <p>
                      {" "}
                      Analyzes technical-tactical skills and
                      physical-psychological traits to assess performance and
                      potential.
                    </p>
                    <div className="wyj-icon position-absolute">
                      <img src="\assets\project.png" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className=" col-xxl-4 col-xl-6 col-lg-6 col-12 d-flex justify-content-md-center justify-content-center">
                  <div className="wyj-box  position-relative"
                    data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                    <h2>Competitions</h2>
                    <p>Baby leagues, tournament and intra leagues</p>
                    <div className="wyj-icon position-absolute">
                      <img src="\assets\medal-.png" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className=" col-xxl-4 col-xl-6 col-lg-6 col-12 d-flex justify-content-md-start justify-content-center">
                  <div className="wyj-box  position-relative"
                    data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                    <h2>Structured Curriculum</h2>
                    <p>
                      Adopting global standards for comprehensive football
                      development
                    </p>
                    <div className="wyj-icon position-absolute">
                      <img src="\assets\curriculum.png" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          {pathname == "/" ? (
            <div
              className="text-center mt-5"
              onClick={() => {
                router("/about");
              }}
            >
              <div className="register-now">
                <button className="px-5">View More</button>
              </div>
            </div>
          ) : (
            <div
              className="text-center mt-5"
              onClick={() => {
                router("/programm");
              }}
            >
              <div className="register-now">
                <button>View Programm</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Whyjoin;
