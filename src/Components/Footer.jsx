import React from "react";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Footer() {
  const router = useNavigate();

  return (
    <section className="bg-dark text-light pt-5 mainbgclr">
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12 d-flex justify-content-lg-center">
              <div className="footerpart">
                <div
                  className="outlast_logo"
                  onClick={() => {
                    router("/");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img src="\assets\outlast_logo.png" className="img-fluid" />
                </div>
                <div className="outlast-info">
                  <p>
                    Outlast FC is a professionally run football academy in
                    Chennai, committed to developing young talent through
                    structured training and expert coaching. With a focus on
                    technical excellence and holistic growth.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-xl-3  col-lg-4 col-md-6 col-sm-6 col-12 d-flex justify-content-lg-center my-sm-4 my-2 my-md-0">
              <div className="footerpart my-md-4 my-lg-0">
                <div className="footer-title my-sm-4 mt-2">
                  <h3>Useful Links</h3>
                </div>
                <div className="footer-link d-md-flex flex-md-wrap d-lg-block">
                  <div
                    className="fl-link d-flex"
                    onClick={() => {
                      router("/");
                    }}
                  >
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>HOME</h6>
                  </div>
                  <div
                    className="fl-link d-flex"
                    onClick={() => {
                      router("/about");
                    }}
                  >
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>ABOUT US</h6>
                  </div>
                  <div
                    className="fl-link d-flex"
                    onClick={() => {
                      router("/league");
                    }}
                  >
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>MATCH</h6>
                  </div>
                  <div
                    className="fl-link d-flex"
                    onClick={() => {
                      router("/league");
                    }}
                  >
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>LEAGUE STRUCTURE</h6>
                  </div>
                  <div
                    className="fl-link d-flex"
                    onClick={() => {
                      router("/contact");
                    }}
                  >
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>BRANCH</h6>
                  </div>
                  <div
                    className="fl-link d-flex"
                    onClick={() => {
                      router("/contact");
                    }}
                  >
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>CONTACT US</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3  col-lg-4 col-md-6 col-sm-6 col-12  my-4 my-md-0 d-flex justify-content-lg-center">
              <div className="footerpart">
                <div className="footer-title my-sm-4 mt-2">
                  <h3>Contact Info</h3>
                </div>
                <div className="footer-link">
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>

                    <h6>
                      <a
                        className="text-light"
                        href="mailto:Outlastfootballacademy@gmail.com"
                      >
                        Outlastfootballacademy@gmail.com
                      </a>
                    </h6>
                  </div>
                  <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>
                      <a className="text-light" href="tel:+917845888611">
                        +91 784 588 8611
                      </a>
                    </h6>
                  </div>
                  {/* <div className="fl-link d-flex">
                    <h6>
                      <ChevronRight />
                    </h6>
                    <h6>102 Spring, London</h6>
                  </div> */}
                </div>
              </div>
            </div>
            <div className=" col-xl-3 col-lg-4 col-md-6 col-12 d-flex justify-content-xl-center justify-content-lg-start my-sm-4 my-2 my-md-0">
              <div className="footerpart">
                <div className="footer-title my-sm-4 mt-2">
                  <h3>Follow Us</h3>
                </div>
                <div className="footer-link d-flex gap-3 align-items-center">
                  <h4>
                    <a href="https://www.instagram.com/outlast_football_academy?igsh=MWNwZWF4eTNvYXRmeg==">
                      {" "}
                      <Instagram />
                    </a>
                  </h4>
                  <h4>
                    <a className="text-light" href="https://www.youtube.com">
                      <Youtube />
                    </a>
                  </h4>
                  <h4>
                    <a className="text-light" href="https://www.facebook.com">
                      {" "}
                      <Facebook />
                    </a>
                  </h4>
                  <h4>
                    <a className="text-light" href="https://www.twitter.com">
                      {" "}
                      <Twitter />
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-2 py-3">
        <div className="container border-top">
          <div className="row pt-5">
            <div className=" terms col-lg-6 col-md-6 col-12 ">
              <h6>Copyright © 2025 Outlast F.C., All rights reserved.</h6>
            </div>
            <div className="col-lg-6 col-md-6 col-12 my-4 my-md-0">
              <div className="d-flex align-items-center justify-content-md-end gap-4">
                <div className="terms d-flex align-items-center gap-1" onClick={()=>{router("/terms-condition")}} style={{cursor:"pointer"}}>
                  <h6>
                    <ChevronRight />
                  </h6>
                  <h6>Terms & Condition</h6>
                </div>
                <div className="privacy d-flex align-items-center gap-1"  onClick={()=>{router("/privacy-policy")}} style={{cursor:"pointer"}}>
                  <h6>
                    <ChevronRight />
                  </h6>
                  <h6>Privacy Policy</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
