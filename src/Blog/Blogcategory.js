import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function Blogcategory() {
  const [editorHtml, setEditorHtml] = useState("");
  const [category, setCategory] = useState([]);
  const [slug, setSlug] = useState("");
  const modalRef = useRef();
  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const [credentials, setCredentials] = useState({
    title: "",
    content: "",
    category: "",
    image: null,
    meta: ""
  });
  const [password, setPassword] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpas: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const RefForm = useRef();

  useEffect(() => {
    const GenerateSlug = () => {
      const slug = credentials.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(slug);
    };
    GenerateSlug();
  }, [credentials.title]);

  const postCreate = async (e) => {
    e.preventDefault();
    let Error = false;
    const form = RefForm.current;
    const cat = form.category.value.trim();
    const tit = form.title.value.trim();
    const con = editorHtml.trim();
    const cate = document.getElementById("categoryI");
    const titl = document.getElementById("titleI");
    const conten = document.getElementById("contentI");

    if (!cat) {
      cate.innerText = "Please enter category";
      Error = true;
    } else {
      cate.innerText = "";
    }
    if (!tit) {
      titl.innerText = "Please enter title";
      Error = true;
    } else {
      titl.innerText = "";
    }
    if (!con) {
      conten.innerText = "Please enter content";
      Error = true;
    } else {
      conten.innerText = "";
    }

    if (Error) {
      return;
    }

    const { title, category, meta } = credentials;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", editorHtml);
    formData.append("category", category);
    formData.append("meta", meta);
    formData.append("slug", slug);
    await fetch("https://legalex-global-backend.vercel.app/api/auth/createpost", {
      method: "POST",
      body: formData,
    });

    setSuccessMessage("Blog added successfully");
    setTimeout(() => {
      setSuccessMessage();
    }, 3000);

    setCredentials({
      title: "",
      content: "",
      category: "",
      meta: ""
    });
    setSlug("");
    setEditorHtml("");
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

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
    <div style={{ backgroundColor: "rgb(246 249 255)" }}>
      <div className="container">
        {successMessage && (
          <div className="alert alert-info blog-alert">{successMessage}</div>
        )}
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary mx-2"
            data-bs-toggle="modal"
            data-bs-target="#static1"
          >
            Change Password
          </button>
          <Link to="/signin">
            <button className="btn btn-primary">Log Out</button>
          </Link>
        </div>
        <h2 className="pt-5 text-center">Create Blog Post</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <form className="form-group" onSubmit={postCreate} ref={RefForm}>
              <label className="mt-3" htmlFor="text">
                Blog Category
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                name="category"
                // value={credentials.category}
                onChange={onchange}
              >
                <option value="">Select a category</option>
                {category &&
                  category.map((select, index) => (
                    <option key={index} value={select.category}>
                      {select.category}
                    </option>
                  ))}
              </select>
              <div id="categoryI" style={{ color: "red" }}></div>

              <label className="mt-3" htmlFor="text">
                Blog Title
              </label>
              <input
                className="form-control"
                type="text"
                name="title"
                value={credentials.title}
                onChange={onchange}
                placeholder="Title Here"
              />
              <div id="titleI" style={{ color: "red" }}></div>
              <label className="mt-3" htmlFor="text">
                Slug
              </label>
              <input
                className="form-control"
                type="text"
                name="slug"
                style={{ color: "red" }}
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="Title Here"
              />
              <label className="mt-3" htmlFor="text">
                Meta Description
              </label>
              <input
                className="form-control"
                type="text"
                name="meta"
                value={credentials.meta}
                onChange={onchange}
                placeholder="Meta Description"
              />
              <div id="metaI" style={{ color: "red" }}></div>
              <label className="mt-3" htmlFor="content">
                Blog Content
              </label>
              <ReactQuill
                style={{ backgroundColor: "white" }}
                theme="snow"
                value={editorHtml}
                onChange={handleEditorChange}
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
                    ["bold", "italic", "underline", "strike", "blockquote"],
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
              <div id="contentI" style={{ color: "red" }}></div>

              <div className="text-start d-flex justify-content-center mt-3 mb-5">
                <button className="btn btn-primary" type="submit">
                  Upload Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Change Password Modal */}
      <div
        className="modal fade"
        id="static1"
        ref={modalRef}
        data-bs-backdrop="static1"
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

