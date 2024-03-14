import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Topnav() {
    const location = useLocation()
    
    if (location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board") {
        return null;
      }
  return (
    <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-md-5 text-center text-lg-start mb-2 mb-lg-0 d-flex align-items-center">
                <h5 style={{color:'#152440'}}>Welcome To Legalex Global Consultants</h5>
            </div>
            <div className="col-md-7 text-center text-lg-end">
                <div className="position-relative d-inline-flex align-items-center text-white top-shape px-5" style={{backgroundColor:'#6E8644'}}>
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@legalexglobal.co.uk</p>
                    </div>
                    <div className="py-2">
                        <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+92 533 709606</p>
                    </div>
                    <div className="py-2 mx-2">
                        <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+92 333 111 9210</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
