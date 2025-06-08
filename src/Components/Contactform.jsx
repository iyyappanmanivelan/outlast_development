import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Contact_Api } from "../Api/form_api";

function Contactform() {
  const [loading, setloading] = useState(false);
  const [showmsg, setshowmsg] = useState(false);
  const [errmsg, seterrmsg] = useState(false);

  const Schemea = Yup.object().shape({
    First_name: Yup.string().required("First Name Required *"),
    Last_name: Yup.string(),
    Mobile: Yup.string().required("Phone Number Required *"),
    Email: Yup.string().required("Email Required"),
    Message: Yup.string(),
  });

  const Formik = useFormik({
    initialValues: {
      First_name: "",
      Last_name: "",
      Mobile: "",
      Email: "",
      Message: "",
    },

    validationSchema: Schemea,
    onSubmit: (values, { resetForm }) => {
      console.log("efknekfn", values);

      setloading(true);

      Contact_Api(values)
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
    },
  });

  return (
    <section className="updown-space ctbg position-relative">
      <div
        className="position-absolute w-100 "
        style={{ zIndex: 1, left: "0px" }}
      >
        <div className="container">
          <div className="getknow d-flex justify-content-center align-items-center gap-3" 
           data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
            <div className="fticon">
              <img src="\assets\football-og.png" className="img-fluid" />
            </div>
            <div className="gt-title ">
              <h4 className="m-0 cg">Get In Touch</h4>
            </div>
          </div>
          <form className="mt-4" onSubmit={Formik.handleSubmit}>
            <div className="row">
              <div className="col-md-6 col-6">
                <div className="formgrp">
                  <label className="cg">Firts Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter First Name"
                    {...Formik.getFieldProps("First_name")}
                  />
                  {Formik?.touched?.First_name && Formik?.errors?.First_name ? (
                    <small className="text-danger">
                      {Formik?.errors?.First_name}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="formgrp">
                  <label className="cg">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Last Name"
                    {...Formik.getFieldProps("Last_name")}
                  />
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="formgrp">
                  <label className="cg">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    {...Formik.getFieldProps("Mobile")}
                  />
                  {Formik?.touched?.Mobile && Formik?.errors?.Mobile ? (
                    <small className="text-danger">
                      {Formik?.errors?.Mobile}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 col-6">
                <div className="formgrp">
                  <label className="cg">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    {...Formik.getFieldProps("Email")}
                  />
                  {Formik?.touched?.Email && Formik?.errors?.Email ? (
                    <small className="text-danger">
                      {Formik?.errors?.Email}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="col-12">
                <div className="formgrp">
                  <label className="cg">Message</label>
                  <textarea
                    className="w-100"
                    placeholder="Enter Message"
                    style={{ height: "150px", borderRadius: "10px" }}
                    {...Formik.getFieldProps("Message")}
                  />
                </div>
                <div className="formgrp mt-lg-5 mt-2">
                  <button className="btn w-100 p-3 " type="submit">
                    {loading ? (
                      <div
                        class="spinner-border text-dark"
                        role="status"
                        style={{ width: "20px", height: "20px" }}
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>

              {showmsg ? (
                <div className="my-4">
                  <small className="bg-success text-light mx-2 py-3 rounded px-5 ">
                    Success ! We will contact you soon ...
                  </small>
                </div>
              ) : null}

              {errmsg ? (
                <div className="my-4">
                  <small className="bg-danger text-light mx-2 py-3 rounded px-5">
                    Something wrong ! Try again later
                  </small>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
      <div className="overlay6 position-absolute" style={{ left: "0px" }}></div>
    </section>
  );
}

export default Contactform;
