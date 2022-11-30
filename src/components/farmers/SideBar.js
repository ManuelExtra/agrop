import React from "react";
import Logo from "../../assets/svgs/Agrop-Logo.svg";
import profileImage from "../../assets/svgs/profile.svg";
import ethereum from "../../assets/svgs/ethereum.svg";
import menu from "../../assets/svgs/menu.svg";
import createHub from "../../assets/svgs/create-hub.svg";
import { Link } from "react-router-dom";

export default function SideBar({ route }) {
    return (
        <div>
            <div className="mt-4 grid place-items-center">
                <img src={Logo} alt="Logo" className="agropLogo" />
            </div>
            <div className="flex max-sm:flex-wrap mt-5 ml-7">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="profileImageStyle"
                />
                <div className="ml-5">
                    <span className="font-black text-xs text-green-700">
                        NETWORK
                    </span>
                    <div className="flex">
                        <img src={ethereum} alt="Icon" />
                        <span className="ml-1 text-xs font-bold">ETHEREUM</span>
                    </div>
                    <p className="text-sm font-bold">0x89205A3A3b...</p>
                </div>
            </div>
            <div className="mt-5">
                <Link to={"/dashboard/"} style={{ textDecoration: "none" }}>
                    <button
                        className={`w-full rounded-none bg-none px-5 py-3 items-center flex ${
                            route === "dashboard" ? "button" : "inActiveButton"
                        }`}
                    >
                        <div className="">
                            <img src={menu} alt="Icon" className="iconStyle" />
                        </div>
                        <div className="text-sm font-bold text-green-700">
                            Dashboard
                        </div>
                    </button>
                </Link>

                <Link
                    to="/dashboard/create-hub"
                    style={{ textDecoration: "none" }}
                >
                    <button
                        className={`w-full rounded-none bg-none px-5 py-3 items-center flex ${
                            route === "hub" ? "button" : "inActiveButton"
                        }`}
                    >
                        <div className="">
                            <img
                                src={createHub}
                                alt="Icon"
                                className="iconStyle"
                            />
                        </div>
                        <div className="text-sm font-bold text-gray-400">
                            Create hub
                        </div>
                    </button>
                </Link>

                <Link
                    to={"/dashboard/add-crop"}
                    style={{ textDecoration: "none" }}
                >
                    <button
                        className={`w-full rounded-none bg-none px-5 py-3 items-center flex ${
                            route === "crop" ? "button" : "inActiveButton"
                        }`}
                    >
                        <div className="">
                            <img
                                src={createHub}
                                alt="Icon"
                                className="iconStyle"
                            />
                        </div>
                        <div className="text-sm font-bold text-gray-400">
                            Add Crop
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
}
