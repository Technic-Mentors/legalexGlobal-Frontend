import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Board() {
const [posts, setPosts] = useState(0)
const [category, setCategory] = useState(0)
const [password, setPassword] = useState({
  email: "",
  oldpassword: "",
  newpassword: "",
  confirmpas: "",
});

const modalRef = useRef();

  const postNumbers = async()=>{
await fetch("https://legalex-global-backend.vercel.app/api/auth/postsCount", {
  method: "GET",
  headers:{
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => setPosts(data))
  }

  const categoryNumbers = async()=>{
await fetch("https://legalex-global-backend.vercel.app/api/auth/categoryCount", {
  method: "GET",
  headers:{
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => setCategory(data))
  }

useEffect(()=>{
  postNumbers()
  categoryNumbers()
},[])

const pasError = document.getElementById("confirmpas");
  const newError = document.getElementById("newpas");
  const oldError = document.getElementById("oldpas");
  const changePas = async () => {
    let Error = false;
    if (!password.oldpassword) {
      oldError.innerText = "Please enter old password";
      Error = true;
    } else {
      oldError.innerText = "";
    }
    if (!password.newpassword) {
      newError.innerText = "Please enter new password";
      Error = true;
    } else {
      newError.innerText = "";
    }
    if (!password.confirmpas) {
      pasError.innerText = "Please enter confirm password";
      Error = true;
    } else if (password.newpassword !== password.confirmpas) {
      pasError.innerText = "Password does not match";
      Error = true;
    } else {
      pasError.innerText = "";
    }
    if (Error) {
      return;
    }

    const res = await fetch("https://legalex-global-backend.vercel.app/api/auth/changepassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword: password.oldpassword,
        newPassword: password.newpassword,
        email: password.email,
      }),
    });
    console.log(res);
    const data = await res.json();
    // console.log(data)
    if (data.error === "Old password incorrect") {
      oldError.innerText = data.error;
    } else if (res.ok) {
      // Request was successful, close the modal using Bootstrap's hide method
      oldError.innerText = "";
      Swal.fire({
        icon: "success",
        title: "Password Changed",
        text: "Your password has been changed successfully!",
      });
    }
    setPassword({
      email: "",
      oldpassword: "",
      newpassword: "",
      confirmpas: "",
    });
  };

  const handlePasChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="d-flex justify-content-end">
      <button
            className="btn btn-primary mx-2"
            data-bs-toggle="modal"
            data-bs-target="#static2"
          >
            Change Password
          </button>
        <Link to="/signin">
          <button className="btn btn-primary">Log Out</button>
        </Link>
      </div>
      <h2 className="pt-5 pb-3 text-center">Categories & Blogs</h2>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center">
              <i className="fa-solid fa-tag fa-2x me-2"></i>
                <h3 className="card-title">Categories</h3>
                </div>
                <h3 className="text-center">{category}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center">
              <i className="fa-solid fa-blog fa-2x me-2"></i>
                <h3 className="card-title text-center">Blogs</h3>
                </div>
                <h3 className="text-center">{posts}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Change Password Modal */}
      <div
        className="modal fade"
        id="static2"
        ref={modalRef}
        data-bs-backdrop="static2"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div>
                <div>
                  <form>
                    <label className="form-lable">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={password.email}
                      onChange={handlePasChange}
                    />
                    <label className="form-lable">Old Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="oldpassword"
                      value={password.oldpassword}
                      onChange={handlePasChange}
                    />
                    <div id="oldpas" style={{ color: "red" }}></div>
                    <label className="form-lable">New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="newpassword"
                      value={password.newpassword}
                      onChange={handlePasChange}
                    />
                    <div id="newpas" style={{ color: "red" }}></div>
                    <label className="form-lable">Confirm New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirmpas"
                      value={password.confirmpas}
                      onChange={handlePasChange}
                    />
                    <div id="confirmpas" style={{ color: "red" }}></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button "
                className="btn btn-primary btn1"
                onClick={changePas}
              >
                Change Password
              </button>
              <button
                type="button "
                className="btn btn-primary btn1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
