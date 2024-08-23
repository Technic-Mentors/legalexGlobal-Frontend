import React from "react";
import { Link } from "react-router-dom";
export default function Admindata() {
  return (
    <div>
      <div className="container mt-4">
        <Link to="board"><button className="btn btn-primary">DASHBOARD</button></Link>
      </div>
      <Link className="text-white" to="addblog">
        <button
          className="btn w-100 text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=""
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="d-flex justify-content-start">
            <div>
              <span className="text-uppercase " style={{ fontSize: "15px", fontWeight: "bolder" }}>Add Blog</span>
            </div>
          </div>
        </button>
      </Link>
      <Link className="text-white" to="allposts">
        <button
          className="btn w-100 text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=""
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="d-flex justify-content-start">
            <div>
              <span className="text-uppercase " style={{ fontSize: "15px", fontWeight: "bolder" }}>All Blog</span>

            </div>
          </div>
        </button>
      </Link>
      <Link className="text-white" to="addcategory">
        <button
          className="btn w-100 text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=""
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="d-flex justify-content-start">
            <div>
              <span className="text-uppercase " style={{ fontSize: "15px", fontWeight: "bolder" }}>Add Category</span>

            </div>
          </div>
        </button>
      </Link>
      <Link className="text-white" to="allcategory">
        <button
          className="btn w-100 text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=""
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="d-flex justify-content-start">
            <div>
              <span className="text-uppercase " style={{ fontSize: "15px", fontWeight: "bold" }}>All Category</span>

            </div>
          </div>
        </button>
      </Link>
    </div>
  );
}
