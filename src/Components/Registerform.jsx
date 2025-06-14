import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { branches } from "../Constant/branch.constant";
import { Register_Api } from "../Api/form_api";
import { useNavigate } from "react-router-dom";

function Registerform() {
  const [loading, setloading] = useState(false);
  const [showmsg, setshowmsg] = useState(false);
  const [errmsg, seterrmsg] = useState(false);
  const [agree, setagree] = useState(false);
  const [agreemsg, setagreemsg] = useState(false);

  const router = useNavigate();

  const Schemea = Yup.object().shape({
    Name: Yup.string().required("Enter Your Name"),
    Mobile: Yup.string().required("Enter Your Number"),
    Age: Yup.string().required("Enter Your Age"),
    Branch: Yup.string(),
  });

  const Formik = useFormik({
    initialValues: {
      Name: "",
      Mobile: "",
      Age: "",
      Branch: "",
    },
    validationSchema: Schemea,

    onSubmit: async (values, { resetForm }) => {
      if (!agree) {
        setagreemsg(true);
        setTimeout(() => {
          setagreemsg(false);
        }, 3000);
      } else {
        setagreemsg(false);

        setloading(true);

        Register_Api(values)
          .then((res) => {
            setloading(false);

            setshowmsg(true);
            setTimeout(() => {
              setshowmsg(false);
            }, 3000);
            resetForm();
          })
          .catch((err) => {
            console.log(err);
            seterrmsg(true);
            setTimeout(() => {
              seterrmsg(false);
            }, 2000);
            resetForm();
            setloading(false);
          });

        console.log("values", values);
      }
    },
  });

  return (
    <section>
      <div
        class="modal fade p-0"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content mainbgclr">
            <div class="modal-header border-0 text-center">
              <h1 class="modal-title fs-3 fw-bold cg" id="exampleModalLabel">
                Registration Form
              </h1>
              <button
                type="button"
                className="btn-close bg-light p-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body border-0 px-4">
              <form onSubmit={Formik.handleSubmit} className="text-light">
                <div className="input-box">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    {...Formik.getFieldProps("Name")}
                  />
                  {Formik.touched.Name && Formik.errors.Name ? (
                    <small className="text-dark">Name field required *</small>
                  ) : null}
                </div>
                <div className="input-box">
                  <label>Mobile</label>
                  <input
                    type="text"
                    {...Formik.getFieldProps("Mobile")}
                    className="form-control"
                    placeholder="Enter Your Mobile"
                  />
                  {Formik.touched.Mobile && Formik.errors.Mobile ? (
                    <small className="text-dark">Mobile field required *</small>
                  ) : null}
                </div>
                <div className="input-box">
                  <label>Age</label>
                  <input
                    type="text"
                    {...Formik.getFieldProps("Age")}
                    className="form-control"
                    placeholder="Enter Your Age"
                  />
                  {Formik.touched.Age && Formik.errors.Age ? (
                    <small className="text-dark">Age field required *</small>
                  ) : null}
                </div>
                <div className="input-box">
                  <label>Select Branch</label>
                  <select
                    className="form-select"
                    {...Formik.getFieldProps("Branch")}
                  >
                    {branches.data.map((branch) => (
                      <option value={branch.locatin}>{branch.locatin}</option>
                    ))}
                  </select>
                  <div className="input-box d-flex align-items-center terms">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      checked={agree}
                      onChange={(e) => setagree(e.target.checked)}
                    />
                    <label
                      className="form-check-label m-0"
                      for="flexCheckDefault"
                    >
                      I agree to the{" "}
                      <span
                        className="text-dark"
                        style={{
                          cursor: "pointer",
                          borderBottom: "1px solid #000",
                        }}
                        onClick={() => {
                          router("/terms-condition");
                        }}
                      >
                        {" "}
                        terms & condition
                      </span>
                    </label>
                  </div>
                </div>

                <button className="submit d-none" id="submit" type="submit">
                  Submit
                </button>

                {showmsg ? (
                  <div className="d-flex justify-content-start">
                    <small className="bg-success mx-2 py-2 rounded px-5">
                      Success ! We will contact you soon ...
                    </small>
                  </div>
                ) : null}

                {agreemsg ? (
                  <div className="d-flex justify-content-start">
                    <small className="bg-danger mx-2 py-2 rounded px-5">
                      Please agree terms & condition
                    </small>
                  </div>
                ) : null}

                {errmsg ? (
                  <div className="d-flex justify-content-start">
                    <small className="bg-danger mx-2 py-2 rounded px-5">
                      Something wrong ! Try again later
                    </small>
                  </div>
                ) : null}
              </form>
            </div>
            <div class="modal-footer border-0">
              <div
                className="register-now text-center"
                onClick={() => {
                  document.getElementById("submit").click();
                }}
              >
                <button style={{ width: "170px", height: "50px" }}>
                  {loading ? (
                    <div
                      class="spinner-border text-dark"
                      role="status"
                      style={{ width: "20px", height: "20px" }}
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    `Let's Join`
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registerform;
