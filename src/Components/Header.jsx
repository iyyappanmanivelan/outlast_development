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
      <div className="tophead py-md-2 py-0 mainbgclr text-light">
        <div className="container">
          <div className="row">
            <div className=" col-xl-6 col-lg-7 col-md-9 col-6 d-md-flex d-block align-items-center gap-lg-5 gap-sm-4 py-3 py-md-0">
              <div className="phone d-flex align-items-center gap-2">
                <h4 className="m-0">
                  <TelephoneFill />
                </h4>
                <h4 className="m-0 text-light">
                  <a className="text-light" href="tel:+917845888611">
                    +91 784 588 8611
                  </a>
                </h4>
              </div>
              <div className="mail d-flex align-items-center gap-2 mt-1 mt-md-0">
                <h4 className="m-0">
                  <EnvelopeFill />
                </h4>
                <h4 className="m-0">
                  <a
                    className="text-light"
                    href="mailto:Outlastfootballacademy@gmail.com"
                  >
                    Outlastfootballacademy@gmail.com
                  </a>
                </h4>
              </div>
            </div>
            <div className=" col-xl-6 col-lg-5 col-md-3 col-6">
              <div className="social-links  d-flex align-items-center gap-md-3 gap-2 justify-content-end pt-md-2 pt-4 ">
                <h5>
                  <a
                    className="text-light"
                    href="https://www.instagram.com/outlast_football_academy?igsh=MWNwZWF4eTNvYXRmeg=="
                  >
                    {" "}
                    <Instagram />
                  </a>
                </h5>
                <h5>
                  <a className="text-light" href="https://www.youtube.com">
                    <Youtube />
                  </a>
                </h5>
                <h5>
                  <a className="text-light" href="https://www.twitter.com">
                    {" "}
                    <Twitter />
                  </a>
                </h5>
                <h5>
                  <a className="text-light" href="https://www.facebook.com">
                    {" "}
                    <Facebook />
                  </a>
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
