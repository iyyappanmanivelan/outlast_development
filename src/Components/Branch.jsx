import { GeoAlt, TelephoneFill } from "react-bootstrap-icons";
import { branches } from "../Constant/branch.constant";
import Registerform from "./Registerform";

function Branch() {
  return (
    <>
      <section className="updow-space my-5 py-5">
        <div className="getknow d-flex justify-content-center align-items-center gap-2">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title ">
            <h4 className="m-0 cg">Our Branches</h4>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            {
            branches.data.map((branch, i) => (
              <div className="col-lg-6" key={i}>
                <div
                  className="row rounded m-3"
                  style={{ backgroundColor: "rgb(41 41 41)" }}
                >
                  <div className="col-sm-6 col-12 p-0 text-light">
                    <div className="position-relative bb">
                      <div className=" mainmap position-absolute w-100">
                        <div className=" mapad d-flex gap-2 justify-content-center align-items-center">
                          <h5>
                            <GeoAlt />
                          </h5>
                          <h5 className="m-0 nm">{branch.locatin}</h5>
                        </div>

                        <div className=" mapad d-flex gap-4 justify-content-center align-items-center my-4">
                          <h5>
                            <TelephoneFill />
                          </h5>
                          <h5 className="m-0">{branch.contact}</h5>
                        </div>

                        {/* <div className="register-now text-center ">
                          <button
                            className="btn text-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Register Now
                          </button>
                        </div> */}
                      </div>

                      <div className="mapbg position-absolute">
                        <img src={branch.image} className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 p-0">
                    <div className="map-view ">
                      <iframe
                        src={branch.map}
                        width="100%"
                        height="350"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Registerform />
    </>
  );
}

export default Branch;
