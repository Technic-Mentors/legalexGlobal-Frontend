import React from 'react'
import BilalImg from "./img/team/bilal-warraich.jpg"
import UraizImg from "./img/team/ali-uraiz.jpg"
import FarhanImg from "./img/team/farhan-babar.jpg"
import RasheedaImg from "./img/team/rasheeda-haroon.jpg"
import AqsaImg from "./img/team/aqsa ijaz.jpg"
import ZwahirImg from "./img/team/zawahir-ahmad.jpg"
import SidraImg from "./img/team/sidra-munir.jpg"

export default function Team() {
    const teamData = [
        { name: "Adv. Bilal Warraich", occ: "CEO", img: BilalImg },
        { name: "Farhan Babar Warraich", occ: "Managing Director", img: FarhanImg },
        { name: "Syed Ali Uraiz", occ: "Branch Manager", img: UraizImg },
        { name: "Miss. Rasheeda Haroon", occ: "Language Trainer/Scholarship Expert", img: RasheedaImg },
        { name: "Dr. Aqsa Ejaz ", occ: "Senior Educational Counsellor", img: AqsaImg },
        { name: "Miss Zawahir Ahmad", occ: "Educational Counsellor", img: ZwahirImg },
        { name: "Miss Sidra Munir", occ: "FDO", img: SidraImg },
    ]
    return (
        <>
            <div className="container-fluid py-5 px-5 team-section">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
                    <h1 className="display-5 mb-0">
                        Our <span style={{ color: "#6E8644" }}>Team</span> Members
                    </h1>
                    <hr className="w-25 mx-auto bg-success" />
                </div>
                <div
                    className="row g-5"
                >
                    {teamData?.map((team, ind) => (
                        <div className="col-md-3" key={ind}>
                            <div className="team-item position-relative overflow-hidden">
                                <div className="d-flex justify-content-center">
                                    <img className="img-fluid" src={team.img} loading="lazy" alt="" style={{ width: "100%" }} />
                                </div>
                                <div
                                    className="team-text w-100 position-absolute top-50 text-center p-4"
                                    style={{ backgroundColor: "#6E8644" }}
                                >
                                    <h5 className="text-white">{team.name}</h5>
                                    <p className="text-white m-0">{team.occ}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
