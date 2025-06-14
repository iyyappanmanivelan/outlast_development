import React from "react";
import Button from "../Commom/Button";

function Whychoose({ data }) {
  return (
    <section className="updown-space mainbgclr">

      <div className="container">
        <div
          className="getknow d-flex align-items-center justify-content-center gap-3"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title ">
            <h4 className="m-0 cg">Why Choose Us</h4>
          </div>
        </div>

        <div className="choose-title  d-block text-center text-md-start text-center  d-md-flex align-items-center justify-content-between my-5 py-3">
          <h3
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="cg"
          >
            Develop your football potential at Oulast F.C.
          </h3>
          <div className="register-now">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                View Programms
              </button>
            </div>
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
    </section>
  );
}

export default Whychoose;
