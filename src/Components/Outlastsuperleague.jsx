import React from "react";

function Outlastsuperleague({ data }) {
  return (
    <section className="updown-space">
      <div className="container">
        <div className="getknow d-flex justify-content-center align-items-center gap-3 " 
         data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">Outlast Super League</h4>
          </div>
        </div>
        <div className="text-center my-5 py-md-3 legintro " >
          <p  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000" className="text-light">{data?.outlast_league?.intro}</p>
        </div>

        <div className="row">
          <div className="col-lg-5 ">
            <div className="leg-cup2"  data-aos="zoom-out"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
              <img src="\assets\ban1.jpg" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-7 mt-5 pt-4 pt-lg-0 mt-lg-0">
            <div className="legstep">
              {data?.outlast_league?.structure?.map((data) => (
                <div className="legpoint2 py-3 px-3 p-md-5 py-md-4 mb-md-5 mb-4"  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  <h4>{data?.name}</h4>
                  <p>{data?.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outlastsuperleague;
