import React, { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import Registerform from "./Registerform";

function Navbar() {
  const navbar = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About Us",
      link: "/about",
    },
    {
      id: 1,
      name: "Our Programm",
      link: "/programm",
    },
    {
      id: 1,
      name: "Our Leagues",
      link: "/league",
    },
    {
      id: 1,
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const router = useNavigate()

  return (
    <section className="navhead" style={{ backgroundColor: "#222121" }}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#222121" }}
        >
          <Link to="/">
            <a className="navbar-brand">
              <div className="outlast_logo">
                <img src="\assets\outlast_logo.png" className="img-fluid" />
              </div>
            </a>
          </Link>
          <button
            className="d-lg-none d-block px-3 py-2 rounded"
            onClick={() => {
              document.getElementById("offcanva").click();
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navmain justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav pagemenu ">
              {navbar.map((data, i) => (
                <li className="nav-item" key={i}>
                  <Link to={data?.link} className="nav-link">
                    {data?.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="register-now">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Register Now
              </button>
            </div>
          </div>
        </nav>
      </div>

      <button
        class="btn btn-primary d-none"
        id="offcanva"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Button with data-bs-target
      </button>

      <div
        class="offcanvas offcanvas-start"
        style={{ backgroundColor: "rgb(224 211 156)" }}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            id="closeoffcanva"
            class="btn-close text-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-header d-flex gap-3 laign-items-center">
             <div className="outlast_logo" style={{width:"50px"}}>
                <img src="\assets\outlast_logo.png" className="img-fluid" />
              </div>
              <h4 className="m-0" style={{fontWeight:"700"}}>OUTLAST F.C.</h4>
        </div>
        <div class="offcanvas-body">
          <div>
            {navbar.map((data , i) => (
              <div className="getknow d-flex justify-content-start my-5 align-items-center gap-3" key={i}>
                <div className="fticon" style={{width:"25px"}}>
                  <img src="\assets\football-black.png" className="img-fluid" />
                </div>
                <div className="gt-title">
                  <h4 className="m-0 text-dark"  style={{fontSize:"20px"}} onClick={()=>{router(data?.link); document.getElementById('closeoffcanva').click() }}  >{data?.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Registerform />
    </section>
  );
}

export default Navbar;
