import React from "react";

function Leagestructure({data}) {
  return (
    <section
      className="updown-space mainbgclr"
     
    >
      <div className="container">
        <div className="getknow d-flex justify-content-center align-items-center gap-3 ">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">League Structure</h4>
          </div>
        </div>
        <div className="leg-st text-light ">
          <div className="leg-title text-center my-5">
            <h3>INTRA ZONAL CHAMPIONSHIP</h3>
          </div>
          <div className="leg-detail">
            <div className="row">
                <div className="col-lg-6">
                  {
                    data?.zonal_league?.structure?.map((data)=>(
                        <div className="leg-point py-4 px-5 mb-5 text-dark">
                            <h4>{data?.name}</h4>
                            <p>{data?.content}</p>
                        </div>
                    ))
                  }
                </div>
                <div className="col-lg-6">
                    <div className="leg-cup">
                        <img src="assets\zone.jpg" className="img-fluid"/>
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
