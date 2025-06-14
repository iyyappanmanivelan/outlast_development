import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";

function OurTeam({ data }) {
  return (
    <section className="updown-space mainbgclr">
      <div className="container-fluid">
        <div className="getknow d-flex justify-content-center align-items-center gap-3 " 
         data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title">
            <h4 className="m-0 cg">Brains Behind the Boots</h4>
          </div>
        </div>

        <div className="getknow-sub py-3 text-light text-center d-flex justify-content-center ">
          <h3 className="py-lg-2 py-3 w-xxl-50 w-lg-100"  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
            Our experienced team fuels the skills, discipline, and mindset for
            future stars.
          </h3>
        </div>
        <div className="row mt-xxl-5 pt-md-5 pt-0 mt-lg-0">
          {data.map((data) => (
            <div className="col-xxl-4 col-md-6 col-12">
              <div className="team-grid my-4 mx-md-3 position-relative bg-light text-dark">
                <div className="team-pic text-center"  data-aos="zoom-out"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
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
