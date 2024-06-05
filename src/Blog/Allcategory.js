import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Allcategory() {
  const [category, setCategory] = useState([]);
  const [seeCategory, setSeeCategory] = useState([]);
  const [seCategory, setSeCategory] = useState("");
  const [editId, setEditId] = useState([]);
  const [password, setPassword] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpas: "",
  });
  
  const modalRef = useRef();

  const Getcategory = async () => {
    await fetch("https://legalex-global-backend.vercel.app/api/auth/getcategory", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  };
  useEffect(() => {
    Getcategory();
  },[]);

  const viewCategory = async (id) => {
    await fetch(`https://legalex-global-backend.vercel.app/api/auth/getcategory/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setSeeCategory(data));
  };

  const deleteCategory = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      return result;
    });

    if (isConfirmed) {
      await fetch(`https://legalex-global-backend.vercel.app/api/auth/delcategory/${id}`, {
        method: "DELETE",
      });
    }
    Getcategory();
  };

  const editCategory = async (id) => {
    await fetch(`https://legalex-global-backend.vercel.app/api/auth/getcategory/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSeCategory(data);
        setEditId(data._id);
      });
  };

  const updateCategory = async () => {
    await fetch(`https://legalex-global-backend.vercel.app/api/auth/editcategory/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: seCategory }),
    });
    Getcategory();
  };

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
            data-bs-target="#static4"
          >
            Change Password
          </button>
        <Link to="/signin"><button className="btn btn-primary">Log Out</button></Link>
        </div>
        <h2 className="pt-5 text-center pb-2">Categories List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {category &&
            category.slice().reverse().map((post) => {
              return (
                <tr>
                  <td>{post.category}</td>
                  <td>
                    <i
                      class="fa-solid fa-eye me-3"
                      style={{ color: "blue" }}
                      data-bs-toggle="modal"
                      data-bs-target="#static"
                      onClick={() => viewCategory(post._id)}
                    ></i>
                    <i
                      class="fas fa-edit me-3"
                      style={{ color: "blue" }}
                      data-bs-toggle="modal"
                      data-bs-target="#staticEdit"
                      onClick={() => editCategory(post._id)}
                    ></i>
                    <i
                      class="fas fa-trash"
                      style={{ color: "blue" }}
                      onClick={() => deleteCategory(post._id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* View Modal */}
      <div
        className="modal fade"
        id="static"
        data-bs-backdrop="static"
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
                    <label className="form-lable">Category</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={seeCategory.category}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
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
      {/* Edit Modal */}
      <div
        className="modal fade"
        id="staticEdit"
        data-bs-backdrop="static"
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
                    <label className="form-lable">Category</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={seCategory.category}
                      onChange={(e) => setSeCategory(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary btn1"
                data-bs-dismiss="modal"
                onClick={updateCategory}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Change Password Modal */}
      <div
        className="modal fade"
        id="static4"
        ref={modalRef}
        data-bs-backdrop="static4"
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
