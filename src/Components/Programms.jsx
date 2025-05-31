import React from "react";
import { Check } from "react-bootstrap-icons";
import Registerform from "./Registerform";

function Programms() {
  return (
    <>
      <section className="program updown-space mainbgclr">
        <div className="container">
          <div className="pg-1">
            <div className="getknow d-flex justify-content-center align-items-center gap-3 ">
              <div className="fticon">
                <img src="\assets\football-og.png" className="img-fluid" />
              </div>
              <div className="gt-title">
                <h4 className="m-0 cg">Our Programms</h4>
              </div>
            </div>
            <div className="programm-sub text-center my-5 text-light">
              <h3>Navigate the Spectrum of Success with Our Programs</h3>
            </div>
          </div>
          <div className="pg-2 mt-5 text-light">
            <div className="programm-card">
              <div className="pg-title text-center">
                <h3>Beginner Training Level</h3>
              </div>
              <div className="row my-5">
                <div className="col-lg-6">
                  <div className="pg-list">
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Technical Training</h4>
                    </div>
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Tactical Training</h4>
                    </div>
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Physical Training</h4>
                    </div>
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>
                        Praticipating Intra Zonal Leagues & Practice Matches
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="lvl1">
                    <video src="\video\video.mp4" autoPlay loop muted />
                  </div>
                </div>
              </div>

              <div className="register-now text-center mt-md-5 mt-2 ">
                <button
                  className="btn text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Register Now
                </button>
              </div>
            </div>

            <div className="programm-card  my-5">
              <div className="pg-title text-center">
                <h3>Developement Training Level</h3>
              </div>
              <div className="row my-5">
                <div className="col-lg-6">
                  <div className="pg-list">
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Technical Training</h4>
                    </div>
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Tactical Training</h4>
                    </div>
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Physical Training</h4>
                    </div>
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>
                        Praticipating Intra Zonal Leagues & Practice Matches &
                        Outside Tournaments
                      </h4>
                    </div>
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Beach Training (or) </h4>
                    </div>
                    <div className=" pgt d-flex align-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Hill Training </h4>
                      <h4>( Monthly once )</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="lvl1">
                    <video src="\video\video.mp4" autoPlay loop muted />
                  </div>
                </div>
              </div>
              <div className="register-now text-center  mt-md-5 mt-2 ">
                <button
                  className="btn text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Register Now
                </button>
              </div>
            </div>
            <div className="programm-card ">
              <div className="pg-title text-center">
                <h3>Elite Training Level</h3>
              </div>
              <div className="row my-5">
                <div className="col-lg-6">
                  <div className="pg-list">
                    <div className=" pgt d-flex alignm-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Technical Training</h4>
                    </div>
                    <div className=" pgt d-flex alignm-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Tactical Training</h4>
                    </div>
                    <div className=" pgt d-flex alignm-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>Physical Training</h4>
                    </div>
                    <div className=" pgt d-flex alignm-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>
                        Praticipating Intra Zonal Leagues & Practice Matches
                      </h4>
                    </div>
                    <div className=" pgt d-flex alignm-items-center gap-3">
                      <img src="\assets\check-mark.png" />
                      <h4>
                        Best Player from all the venues will be selected for the
                        elite teams , This teams will be Participating in the
                        top leagues and tournaments{" "}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="lvl1">
                    <video src="\video\video.mp4" autoPlay loop muted />
                  </div>
                </div>
              </div>
              <div className="register-now text-center  mt-md-5 mt-2 ">
                <button
                  className="btn text-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Registerform />
    </>
  );
}

export default Programms;
