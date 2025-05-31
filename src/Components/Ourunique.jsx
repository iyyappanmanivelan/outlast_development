import React from "react";

function Ourunique({ data }) {
  return (
    <section className="updown-space">
      <div className="getknow d-flex justify-content-center align-items-center gap-3 ">
        <div className="fticon">
          <img src="\assets\football-og.png" className="img-fluid" />
        </div>
        <div className="gt-title">
          <h4 className="m-0 cg">Our Unique Values</h4>
        </div>
      </div>

      <div className="getknow-sub py-3 text-light text-center">
        <h3 className="py-lg-2 py-3">What Makes Outlast Academy Different</h3>
      </div>

      <div className="container mt-5 pt-4">
        <div className="row">
          {data.map((uq) => (
            <div className="col-lg-6">
              <div className="uq-box mx-3 my-5">
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
