import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import {
  EnvelopeFill,
  Facebook,
  Instagram,
  TelephoneFill,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

function Header() {
  return (
    <section>
      <div className="tophead py-md-2 py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-md-6 col-6 d-flex align-items-center gap-md-5 gap-2 ">
              <div className="phone d-flex align-items-center gap-2">
                <h4 className="m-0">
                  <TelephoneFill />
                </h4>
                <h4 className="m-0">
                  <a href="tel:+917845888611">+91 784 588 8611</a>
                </h4>
              </div>
              <div className="mail d-flex align-items-center gap-2 ">
                <h4 className="m-0">
                  <EnvelopeFill />
                </h4>
                <h4 className="m-0">
                  <a href="mailto:Outlastfootballacademy@gmail.com">
                    Outlastfootballacademy@gmail.com
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <div className="social-links d-flex align-items-center gap-md-3 gap-2 justify-content-end pt-2 ">
                <h5>
                  <a href="https://www.instagram.com/outlast_football_academy?igsh=MWNwZWF4eTNvYXRmeg==">
                    {" "}
                    <Instagram />
                  </a>
                </h5>
                <h5>
                  <a href="https://www.youtube.com">
                    <Youtube />
                  </a>
                </h5>
                <h5>
                 <a href="https://www.twitter.com"> <Twitter /></a>
                </h5>
                <h5>
                 
                  <a href="https://www.facebook.com"> <Facebook /></a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondhead">
        <Navbar />
      </div>
    </section>
  );
}

export default Header;
