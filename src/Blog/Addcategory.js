import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export default function Addcategory() {
  const [category, setCategory] = useState('');
  const [existingCategories, setExistingCategories] = useState([]);
  const refForm = useRef();
  const [password, setPassword] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpas: "",
  });
  
  const modalRef = useRef();
  useEffect(() => {
    // Fetch existing categories when the component mounts
    fetchExistingCategories();
  }, []);

  const fetchExistingCategories = async () => {
    await fetch("https://legalex-global-backend.vercel.app/api/auth/getcategory", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const cleanedCategories = data.map((post) =>
          post.category
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")
        );
        setExistingCategories(cleanedCategories);
      });
  };

  const AddCategory = async (e) => {
    e.preventDefault();
    const form = refForm.current;
    const catValue = form.category.value.trim();
    const cate = document.getElementById('category');
  
    if (!catValue) {
      cate.innerText = 'Please enter category';
      return;
    }
  
    // Check if the category already exists (case insensitive)
    const isCategoryExists = existingCategories.some(
      (existingCategory) => existingCategory.toLowerCase() === catValue.toLowerCase()
    );
  
    if (isCategoryExists) {
      cate.innerText = 'Category already exists';
      return;
    }
  
    cate.innerText = '';
  
    // Add the new category
    await fetch("https://legalex-global-backend.vercel.app/api/auth/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category: catValue }),
    });
  
    // Clear the input and fetch updated list of categories
    setCategory('');
    fetchExistingCategories();
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
            data-bs-target="#static3"
          >
            Change Password
          </button>
        <Link to="/"><button className="btn btn-primary">Log Out</button></Link>
        </div>
        <h2 className="pt-5 pb-3 text-center">Create Category</h2>
      <form ref={refForm} className='form-group' onSubmit={AddCategory}>
        <input
          className='form-control'
          style={{ width: '40%' }}
          type='text'
          placeholder='Add Category'
          name='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div id='category' style={{ color: 'red' }}></div>
        <button className='btn btn-primary mt-3'>Add</button>
      </form>
      {/* Change Password Modal */}
      <div
        className="modal fade"
        id="static3"
        ref={modalRef}
        data-bs-backdrop="static3"
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
