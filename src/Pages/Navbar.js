import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import legalLogo from "./img/Logo.png"

export default function Navbar() {
  const Links = [
    { path: "/", text: "HOME" },
    { path: "/about", text: "ABOUT US" },
    { path: "/service", text: "OUR SERVICES" },
    { path: "/blog", text: "Blog" },
    { path: "/contact", text: "CONTACT US" },
  ];

  const [isNavbarCollapsed, setIsNavbarCollpased] = useState(true);
  const location = useLocation();

  const handleNavbarToggle = () => {
    setIsNavbarCollpased(!isNavbarCollapsed);
  };
  const closeNavbar = () => {
    if (window.innerWidth <= 768) {
      setIsNavbarCollpased(true);
    }
  };

  const isLinkActive = (linkPath) => {
    return linkPath === location.pathname ? "active" : "";
  };

  if (location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board") {
    return null;
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0 text-uppercase">
            <img src={legalLogo} alt="" style={{ width: 140, height: 60 }} />
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={handleNavbarToggle}
          aria-expanded={!isNavbarCollapsed}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"
          }`} id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 me-n3">
            {Links.map((link, index) => (
              <Link
                onClick={closeNavbar}
                key={index}
                to={link.path}
                className={`nav-item nav-link ${isLinkActive(link.path)}`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
