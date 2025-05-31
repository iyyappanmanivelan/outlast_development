import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";

function OurTeam({ data }) {
  return (
    <section className="updown-space mainbgclr">
      <div className="container-fluid">
        <div className="getknow d-flex justify-content-center align-items-center gap-3 ">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">Brains Behind the Boots</h4>
          </div>
        </div>

        <div className="getknow-sub py-3 text-light text-center d-flex justify-content-center ">
          <h3 className="py-lg-2 py-3 w-50">
            Our experienced team fuels the skills, discipline, and mindset for
            future stars.
          </h3>
        </div>
        <div className="row mt-5 pt-5">
          {data.map((data) => (
            <div className="col-lg-4">
              <div className="team-grid my-4 mx-3 position-relative bg-light text-dark">
                <div className="team-pic text-center">
                  <img src={data?.Team_pic} className="img-fluid" />
                </div>
                {/* <div className="teamwise text-center">
    
                  <h3 className="m-0">{data?.Team_name}</h3>
                </div>
                <div className="teamview text-center d-flex justify-content-center gap-3 align-items-center">
                  <h5>
                    <GeoAltFill />
                  </h5>
                  <h6 className="m-0">{data?.location}</h6>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
