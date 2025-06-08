import React from "react";
import Registerform from "./Registerform";

function Joinus() {
  return (
   <>
    <section>
      <div className="conatiner">
        <div className="bg-frame position-relative">
          <div className="frmae ">
            <img src="\assets\turf2.jpg" className="w-100" />
          </div>
          <div className="overlay2 position-absolute"></div>
          <div className="frmae-points position-absolute">
            <div className="container">
            <div className="getknow d-flex align-items-center justify-content-start gap-3" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                  <div className="fticon">
                    <img
                      src="\assets\football-white.png"
                      className="img-fluid"
                    />
                  </div>
                  <div className="gt-title ">
                    <h4 className="m-0 text-light">Join Us</h4>
                  </div>
                </div>
              <div className="jn-title my-4" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <h3>Ready to Lace Up Your Dreams? Join us and unlock your true potential on the pitch.</h3>
              </div>
             <div className="register-now">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Register Now
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Registerform/>
   </>
  );
}

export default Joinus;
