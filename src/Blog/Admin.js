import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Admindata from "./Admindata";

export default function Admin() {
  return (
    <div className="ps-0">
      <div className="home-container">
        <div
          className="background-image1"
        >
          <div className="color-overlay1 d-flex justify-content-center align-items-center">
            <div>
              <h1
                style={{ color: "#28599D", fontSize: 70 }}
                className="text-white text-center animate__animated animate__zoomIn"
              >
                legalexGlobal : Admin Panel
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-3" style={{ backgroundColor: "rgb(246 249 255)" }}>
          <div className=" col-md-2">
            <div
              className="background-img5"
              style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
            >
              <div
                className="color-overlay5 pb-3 pt-2 outlet"
              >
                <Admindata />
              </div>
            </div>
          </div>

          <div className="col-md-10 mt-5 mb-5" style={{ textAlign: "justify" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
