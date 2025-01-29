import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from "./img/footerLogo.png"
import footerLogo1 from "./img/footerLogo1.png"
import footerLogo2 from "./img/footerLogo2.png"
import footerLogo3 from "./img/footerLogo3.png"
import afili1 from "./img/afili/afili1.png"
import afili2 from "./img/afili/afili2.png"
import afili3 from "./img/afili/afili3.png"
import afili4 from "./img/afili/afili4.png"

export default function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-secondary p-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">About Us</h4>
            <div className="d-flex flex-column justify-content-start">
              <p>Discover your path to the UK with LEGALEX GLOBAL. Our dedicated team pioneers your immigration voyage, offering tailored solutions that transcend borders. Trust us to be your steadfast guide, making UK dreams a reality</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4 className="text-white mb-4">Popular Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <Link to="/" className="nav-item nav-link active text-white">Home</Link>
              <Link to="/about" className="nav-item nav-link text-white">About</Link>
              <Link to="/service" className="nav-item nav-link text-white">Service</Link>
              <Link to="/signin" className="nav-item nav-link text-white">Admin</Link>
              <Link to="/contact" className="nav-item nav-link text-white">Contact</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Get In Touch</h4>
            <p className="mb-2">
              <i className="bi bi-telephone  me-2 " style={{ color: '#B4D342' }}></i>+92 333 111 9210
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone  me-2 " style={{ color: '#B4D342' }}></i>+92 333 111 9205
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone  me-2 " style={{ color: '#B4D342' }}></i>+92 533 709606</p>
            <p className="mb-2">
              <i className="bi bi-telephone  me-2 " style={{ color: '#B4D342' }}></i>+44 2035 114111</p>
            <p className="mb-0">
              <i className="bi bi-envelope-open  me-2 " style={{ color: '#B4D342' }}></i>
              info@legalexglobal.co.uk
            </p>

            <div className="">
              <h4 className="text-white my-4">Follow Us</h4>
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
                  className="btn btn-lg btn-lg-square rounded-circle me-2"
                  href="https://www.instagram.com/invites/contact/?i=1mptrw8rdqqn6&utm_content=sc45hzt"
                  target='blank'
                >
                  <i className="fab fa-instagram fw-normal"></i>
                </a>
                <a
                  className="btn btn-lg btn-lg-square rounded-circle"
                  href="https://www.tiktok.com/@legalexglobalconsultants?_t=ZS-8t8TTWD47EO&_r=1"
                  target='blank'
                >
                  <i className="fab fa-tiktok fw-normal"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 d-flex justify-content-center">
            <div>
              <h4 className="text-white mb-4">Official Partner</h4>
              <img src={footerLogo} style={{ width: "100px" }} alt='footer-logo'></img><br />
              <img src={footerLogo1} className='mt-3' style={{ width: "100px" }} alt='footer-logo'></img><br />
              <img src={footerLogo2} className='mt-3' style={{ width: "100px" }} alt='footer-logo'></img><br />
              <img src={footerLogo3} className='mt-3' style={{ width: "100px" }} alt='footer-logo'></img><br />
            </div>
          </div>
          <div className="col-lg-2 col-md-6 d-flex justify-content-center">
            <div>
              <h4 className="text-white mb-4">Affiliated Organizations</h4>
              <img src={afili1} style={{ width: "70px" }} alt='footer-logo' className='me-3'></img>
              <img src={afili4} style={{ width: "70px" }} alt='footer-logo'></img>
              <img src={afili2} className='mt-3 me-3' style={{ width: "70px" }} alt='footer-logo'></img>
              <img src={afili3} className='mt-3' style={{ width: "70px" }} alt='footer-logo'></img>
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
