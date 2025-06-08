import React from "react";

function Ourunique({ data }) {
  return (
    <section className="updown-space bgframe2">
      <div className="getknow d-flex justify-content-center align-items-center gap-3 "
       data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
        <div className="fticon">
          <img src="\assets\football-og.png" className="img-fluid" />
        </div>
        <div className="gt-title">
          <h4 className="m-0 cg">Our Unique Values</h4>
        </div>
      </div>

      <div className="getknow-sub py-3 text-light text-center">
        <h3 className="py-lg-2 py-3"  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">What Makes Outlast Academy Different</h3>
      </div>

      <div className="container mt-md-5 pt-md-4">
        <div className="row">
          {data.map((uq) => (
            <div className="col-md-6 col-12">
              <div className="uq-box mx-lg-3 mx-0 my-5" 
               data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                <div className="uq-img">
                  <img src={uq?.img} className="img-fluid" />
                </div>
                <div className="uq-cont ">
                  <h4>{uq.content}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ourunique;
