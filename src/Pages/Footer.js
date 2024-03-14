import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from "./img/footerLogo.png"

export default function Footer() {
  return (
    <div>
      <div
      className="container-fluid bg-dark text-secondary p-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">About Us</h3>
            <div className="d-flex flex-column justify-content-start">
              <p>Discover your path to the UK with LEGALEX GLOBAL. Our dedicated team pioneers your immigration voyage, offering tailored solutions that transcend borders. Trust us to be your steadfast guide, making UK dreams a reality</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Popular Links</h3>
            <div className="d-flex flex-column justify-content-start">
                <Link to="/" className="nav-item nav-link active text-white">Home</Link>
                <Link to="/about" className="nav-item nav-link text-white">About</Link>
                <Link to="/service" className="nav-item nav-link text-white">Service</Link>
                <Link to="/signin" className="nav-item nav-link text-white">Admin</Link>
                <Link to="/contact" className="nav-item nav-link text-white">Contact</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2">
              <i className="bi bi-telephone  me-2 " style={{color:'#B4D342'}}></i>+44 2035 114111</p>
            <p className="mb-2">
              <i className="bi bi-telephone  me-2 " style={{color:'#B4D342'}}></i>+92 533 709606</p>
            <p className="mb-2">
              <i className="bi bi-telephone  me-2 " style={{color:'#B4D342'}}></i>+92 333 111 9210
              </p>
            <p className="mb-0">
              <i className="bi bi-envelope-open  me-2 " style={{color:'#B4D342'}}></i>
              info@legalexglobal.co.uk
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="d-flex">
              <a
                className="btn btn-lg btn-lg-square rounded-circle me-2"
                href="https://twitter.com/LegalexGlobal?t=VFBdqwEAzRaJZTIAd0IhMg&s=09"
                target='blank'
              >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a
                className="btn btn-lg btn-lg-square rounded-circle me-2"
                href="https://www.facebook.com/profile.php?id=100094430017707&mibextid=ZbWKwL"
                target='blank'
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-lg btn-lg-square rounded-circle me-2"
                href="#/"
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-lg btn-lg-square rounded-circle"
                href="https://www.instagram.com/invites/contact/?i=1mptrw8rdqqn6&utm_content=sc45hzt"
                target='blank'
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
            </div>
              <div className='mt-3'>
              <h3 className="text-white mb-4">Official Partner</h3>
              <img src={footerLogo} style={{width:"190px"}} alt='footer-logo'></img>
              </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-secondary text-center border-top py-4 px-5"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <p className="m-0">
          &copy;{" "}
            Legalexglobal
          . All Rights Reserved. Developed With Love By{" "}
          <a
            className="text-secondary border-bottom"
            href="https://technicmentors.com/"
            target='blank'
          >
            Technic Mentors
          </a>
        </p>
      </div>
    </div>
  )
}
