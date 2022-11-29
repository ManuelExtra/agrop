import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import Header from "./Header";

// svg images
import connectWallet from "../assets/svgs/connect-wallet.svg";
import createHub from "../assets/svgs/create-hub.svg";
import launchApp from "../assets/svgs/launch-app.svg";
import requestVerification from "../assets/svgs/request-verification.svg";
import startSelling from "../assets/svgs/start-selling.svg";
import contact from "../assets/svgs/contact.svg";
import crop from "../assets/svgs/crop.svg";

import { BASE_URL } from "../utils/data";
import { view, sign } from "../utils/auth";

export default function Guide() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        user: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${BASE_URL}user/login`, user);
            console.log(response.data.error);
            response = response.data;
            if (response.error === 1) {
                window.alert(response.msg);
            } else {
                const { data, token } = response;
                sign(data, token);
                window.alert(response.msg);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            window.alert(error.response.data.msg);
        }
    };

    return (
        <>
            <div className="mt-20 border-b-2 pb-10">
                <span className="text-5xl font-black justify-center guide">
                    Guide
                </span>
                <span className="px-3 py-2 ml-5 rounded-lg text-xs guideText md:visible max-sm:invisible">
                    This is a guide on how to use AGROP
                </span>
            </div>
            <p className="mt-6 text-xl font-bold">As a Farmer</p>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-10 gap-3 mb-7">
                <div class="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box">
                    <img
                        src={launchApp}
                        className="imageStyle"
                        alt="launch app"
                    />
                    <p className="text-xl font-black mt-3 textHeading">
                        1. Launch App
                    </p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet. In necessitatibus voluptate
                        qui amet rerum ut repellat totam ea pariatur
                    </p>
                </div>

                <div class="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box">
                    <img
                        src={connectWallet}
                        className="imageStyle"
                        alt="launch app"
                    />
                    <p className="text-xl font-black mt-3 textHeading">
                        2. Connect Wallet
                    </p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet. In necessitatibus voluptate
                        qui amet rerum ut repellat totam ea pariatur
                    </p>
                </div>
                <div class="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box">
                    <img
                        src={createHub}
                        className="imageStyle"
                        alt="launch app"
                    />
                    <p className="text-xl font-black mt-3 textHeading">
                        3. Create Hub
                    </p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet. In necessitatibus voluptate
                        qui amet rerum ut repellat totam ea pariatur
                    </p>
                </div>
                <div class="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box">
                    <img
                        src={requestVerification}
                        className="imageStyle"
                        alt="launch app"
                    />
                    <p className="text-xl font-black mt-3 textHeading">
                        4. Request Verification
                    </p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet. In necessitatibus voluptate
                        qui amet rerum ut repellat totam ea pariatur
                    </p>
                </div>
                <div class="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box">
                    <img
                        src={startSelling}
                        className="imageStyle"
                        alt="launch app"
                    />
                    <p className="text-xl font-black mt-3 textHeading">
                        5. Start Selling
                    </p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet. In necessitatibus voluptate
                        qui amet rerum ut repellat totam ea pariatur
                    </p>
                </div>
            </div>

            <p className="mt-10 text-xl font-bold">As a Consumer</p>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-10 gap-3 mb-7">
                <div class="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box">
                    <img
                        src={launchApp}
                        className="imageStyle"
                        alt="launch app"
                    />
                    <p className="text-xl font-black mt-3 textHeading">
                        1. Launch App
                    </p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet. In necessitatibus voluptate
                        qui amet rerum ut repellat totam ea pariatur
                    </p>
                </div>

                <div class="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box">
                    <img src={crop} className="imageStyle" alt="launch app" />
                    <p className="text-xl font-black mt-3 textHeading">
                        2. View Crop
                    </p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet. In necessitatibus voluptate
                        qui amet rerum ut repellat totam ea pariatur
                    </p>
                </div>
                <div class="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box">
                    <img
                        src={contact}
                        className="imageStyle"
                        alt="launch app"
                    />
                    <p className="text-xl font-black mt-3 textHeading">
                        3. Contact Farmer
                    </p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet. In necessitatibus voluptate
                        qui amet rerum ut repellat totam ea pariatur
                    </p>
                </div>
            </div>
        </>
    );
}
