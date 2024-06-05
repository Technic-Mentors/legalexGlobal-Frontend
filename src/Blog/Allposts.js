import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
export default function Allposts() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState([]);
  const [post, setPost] = useState([]);
  const [editPost, setEditPost] = useState([]);
  const [postId, setPostId] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [password, setPassword] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpas: "",
  });
  const modalRef = useRef();
  const Getallposts = async () => {
    await fetch("https://legalex-global-backend.vercel.app/api/auth/getallposts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };
  useEffect(() => {
    Getallposts();
  }, []);

  const viewPosts = async (id) => {
    await fetch(
      `https://legalex-global-backend.vercel.app/api/auth/getposts/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setPost(data));
  };
  const deletePosts = async (id) => {
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
      await fetch(
        `https://legalex-global-backend.vercel.app/api/auth/delposts/${id}`,
        {
          method: "DELETE",
        }
      );
      Getallposts();
    }
  };

  const editPosts = async (id) => {
    await fetch(`https://legalex-global-backend.vercel.app/api/auth/getposts/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setEditPost(data);
        setPostId(data._id);
      });
  };
  const onchange = (e) => {
    setEditPost({ ...editPost, [e.target.name]: e.target.value });
  };
  const updatePost = async () => {
    await fetch(`https://legalex-global-backend.vercel.app/api/auth/editposts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: editPost.title,
        category: editPost.category,
        content: editPost.content,
        slug: editPost.slug,
      }),
    });
    Getallposts();
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      post.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const Getcategory = async () => {
    await fetch(
      "https://legalex-global-backend.vercel.app/api/auth/getcategory",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  };
  useEffect(() => {
    Getcategory();
  });

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
    if (data.error === "Old Password Incorrect") {
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
      <h2 className="pt-5 pb-3 text-center">Blogs List</h2>
      {/* Add search input fields */}
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Search by Title:</label>
              <input
                type="text"
                className="form-control"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Search by Category:</label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="category"
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                {category &&
                  category.map((select, index) => (
                    <option key={index}>{select.category}</option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.slice().reverse().map((posts) => {
            return (
              <tr>
                <td>{posts.title}</td>
                <td>{posts.category}</td>
                <td>{formatDate(posts.date)}</td>
                <td>
                  <i
                    class="fa-solid fa-eye me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{ color: "blue" }}
                    onClick={() => viewPosts(posts._id)}
                  ></i>
                  <i
                    className="fas fa-edit me-1"
                    style={{ color: "blue" }}
                    data-bs-toggle="modal"
                    data-bs-target="#staticdel"
                    onClick={() => editPosts(posts._id)}
                  ></i>
                  <i
                    className="fas fa-trash"
                    style={{ color: "blue" }}
                    onClick={() => deletePosts(posts._id)}
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
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                Blog Posts
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div>
                <div>
                  <form>
                    <label className="form-lable">Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={post.title}
                    />
                    <label className="form-lable">Category</label>
                    <input
                      className="form-control"
                      type="name"
                      name="email"
                      value={post.category}
                    />
                    <label className="form-lable">Content</label>
                    <div
                      className="form-control"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                      type="text"
                      rows={10}
                      // value={post.content}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
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
        id="staticdel"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                Blog Posts
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div>
                  <form>
                    <label className="form-lable">Title</label>
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      value={editPost.title}
                      onChange={onchange}
                    />
                    <label className="form-lable">Slug</label>
                    <input
                      className="form-control"
                      type="text"
                      name="slug"
                      style={{ color: "red" }}
                      value={editPost.slug}
                      onChange={onchange}
                    />
                    <label className="form-lable">Category</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="category"
                      value={editPost.category}
                      onChange={onchange}
                    >
                      <option value="">Select a category</option>
                      {category &&
                        category.map((select, index) => (
                          <option key={index}>{select.category}</option>
                        ))}
                    </select>
                    <label className="form-lable">Content</label>
                    <ReactQuill
                      theme="snow"
                      value={editPost.content}
                      // onChange={(value) => onchange({ target: { name: "content", value } })}
                      onChange={(value) =>
                        onchange({ target: { name: "content", value } })
                      }
                      modules={{
                        toolbar: [
                          [
                            { header: "1" },
                            { header: "2" },
                            {
                              header: "3",
                              attributes: { className: "custom-header" },
                            },
                            {
                              header: "4",
                              attributes: { className: "custom-header" },
                            },
                            {
                              header: "5",
                              attributes: { className: "custom-header" },
                            },
                            { font: [] },
                          ],
                          [
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "blockquote",
                          ],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["link", "image"],
                          [{ color: [] }, { background: [] }],
                          ["clean"],
                          [{ align: [] }],
                        ],
                      }}
                      formats={[
                        "header",
                        "font",
                        "bold",
                        "italic",
                        "underline",
                        "strike",
                        "blockquote",
                        "list",
                        "bullet",
                        "link",
                        "image",
                        "color",
                        "background",
                        "align",
                      ]}
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
                onClick={updatePost}
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
