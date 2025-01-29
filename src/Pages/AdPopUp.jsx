import React, { useState, useEffect } from "react";
import AdImg from "./img/ad.png"

const AdPopUp = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <>
            {/* Modal */}
            {show && (
                <div
                    className="modal fade show"
                    id="staticBackdrop"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShow(false)} // Close modal on button click
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <img src={AdImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdPopUp;
