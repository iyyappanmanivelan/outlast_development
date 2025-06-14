import React from "react";
import { termsData } from "../Constant/terms.constant";

function Terms() {
  return (
    <section className="updown-space">
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
            <h4 className="m-0 cg">Terms & Condition</h4>
          </div>
        </div>

        <div className="terms-point text-light mt-5 pt-md-3 pt-0">
          {termsData?.map((data) => (
            <div className="my-5">
              <h3 className="cg">{data?.title}</h3>
              <h5 className="pt-md-3 pt-2">{data?.subtitle}</h5>
              <h5>{data?.subtitle_2}</h5>
              <h5>{data?.subtitle_3}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Terms;
