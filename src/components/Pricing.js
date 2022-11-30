import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { Button } from "flowbite-react";

import Header from "./Header";

import { BASE_URL } from "../utils/data";
import { view, sign } from "../utils/auth";

export default function Pricing() {
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
                <span className="text-5xl font-black justify-center guide poppins">
                    Pricing
                </span>
            </div>

            <div className="mt-10 m-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-10 gap-3 mb-7">
                    <div className="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box_ bg-main-color">
                        <span className="raleway text-white">MONTHLY</span>
                        <br />
                        <br />

                        <span className="raleway text-white font-bold">
                            0.005 ETH
                        </span>
                        <br />
                        <span className="raleway text-4xl text-white font-black">
                            N4,696.00
                        </span>
                        <br />
                        <br />
                        <span className="raleway text-sm italic text-white">
                            For most farmers that wants to optimize their web
                            queries
                        </span>
                        <br />
                        <br />
                        <ul className="text-white raleway type-circle">
                            <li>Access to Create Hub</li>
                            <li>One months access</li>
                        </ul>
                        <br />
                        <button className="p-3 rounded-xl white-outline font-bold text-white block raleway w-full bg-main-color">
                            Choose Plan
                        </button>
                    </div>

                    <div className="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box_ main-bgcolor">
                        <span className="raleway text-white">QUARTERLY</span>
                        <br />
                        <br />

                        <span className="raleway text-white font-bold">
                            0.01425 ETH
                        </span>
                        <br />
                        <span className="raleway text-4xl text-white font-black">
                            N13,376.00
                        </span>
                        <br />
                        <br />
                        <span className="raleway text-sm italic text-white">
                            For most farmers that wants to optimize their web
                            queries
                        </span>
                        <br />
                        <br />
                        <ul className="text-white raleway type-circle">
                            <li>5% Discount for registration</li>
                            <li>Three months access</li>
                        </ul>
                        <br />
                        <button className="p-3 rounded-xl text-main-color block raleway w-full font-bold bg-white">
                            Choose Plan
                        </button>
                    </div>

                    <div className="p-4 flextransition ease-in-out hover:-translate-x-1 hover:scale-20 duration-300 box_ main2-bgcolor">
                        <span className="raleway ">YEARLY</span>
                        <br />
                        <br />

                        <span className="raleway  font-bold">0.0582 ETH</span>
                        <br />
                        <span className="raleway text-4xl  font-black">
                            N54,640.00
                        </span>
                        <br />
                        <br />
                        <span className="raleway text-sm italic ">
                            For most farmers that wants to optimize their web
                            queries
                        </span>
                        <br />
                        <br />
                        <ul className=" raleway type-circle">
                            <li>3% Discount for registration</li>
                            <li>Twelve months access</li>
                        </ul>
                        <br />
                        <button className="p-3 rounded-xl block raleway w-full font-bold black-outline">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
