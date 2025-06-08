import React from "react";

function Ourstory({ data }) {
  return (
    <section className="updown-space text-light mainbgclr" >
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
            <div className="getknow d-flex justify-content-start align-items-center gap-3"   data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg"> Our Story</h4>
          </div>
        </div>

        <div className="story-sec mt-5 "   data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
          <h5 className="">{data?.content}</h5>
        </div>
        <div className="story-sec mt-3 mt-md-5"   data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
          <h5 className="">{data?.content_2}</h5>
        </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="frame-img"
                  data-aos="zoom-out"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                    <img src={data?.img} className="img-fluid"/>
                </div>
            </div>
        </div>
      
      </div>
    </section>
  );
}

export default Ourstory;
