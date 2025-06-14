import React from "react";

function Leagestructure({data}) {
  return (
    <section
      className="updown-space mainbgclr"
     
    >
      <div className="container">
        <div className="getknow d-flex justify-content-center align-items-center gap-3 " 
         data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">League Structure</h4>
          </div>
        </div>
        <div className="leg-st text-light ">
          <div className="leg-title text-center my-md-5 my-4">
            <h3  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">INTRA ZONAL CHAMPIONSHIP</h3>
          </div>
          <div className="leg-detail">
            <div className="row">
                <div className="col-lg-6">
                  {
                    data?.zonal_league?.structure?.map((data)=>(
                        <div className="leg-point py-4 px-5 mb-md-5 mb-4 text-dark"  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                            <h4>{data?.name}</h4>
                            <p>{data?.content}</p>
                        </div>
                    ))
                  }
                </div>
                <div className="col-lg-6">
                    <div className="leg-cup"  data-aos="zoom-out"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                        <img src="\assets\zone.JPG" className="img-fluid"/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leagestructure;
