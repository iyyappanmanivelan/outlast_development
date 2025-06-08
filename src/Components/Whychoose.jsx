import React from "react";
import Button from "../Commom/Button";

function Whychoose({ data }) {
  return (
    <section className=" choose-bg position-relative">
      <div className="choose-content position-absolute updown-space">
        <div className="container">
          <div
            className="getknow d-flex align-items-center justify-content-center gap-3"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="fticon">
              <img src="\assets\football-black.png" className="img-fluid" />
            </div>
            <div className="gt-title ">
              <h4 className="m-0 text-dark">Why Choose Us</h4>
            </div>
          </div>

          <div className="choose-title  d-block text-center text-md-start text-center  d-md-flex align-items-center justify-content-between my-5 py-3">
            <h3
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              Develop your football potential at Oulast F.C.
            </h3>
            <Button
              color={"#fff"}
              bgcolor={"#000"}
              text={"View Programm"}
              link={"/programm"}
              radius={"0px 10px 0px 10px"}
            />
          </div>
          <div className="choose-intro">
            <div className="row">
              {data?.map((item, i) => (
                <div className="col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="choose-card mb-5 p-3 bg-light">
                    <div
                      className="cc-img text-start"
                      data-aos="fade-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1000"
                    >
                      <img src={item?.icon} className="img-fluid" />
                    </div>
                    <div className="cc-title text-start my-2">{item.title}</div>
                    <div className="cc-explain">{item?.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-3 position-absolute"></div>
    </section>
  );
}

export default Whychoose;
