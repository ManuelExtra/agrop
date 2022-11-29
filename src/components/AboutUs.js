import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import Header from "./Header";

import { BASE_URL } from "../utils/data";
import { view, sign } from "../utils/auth";

export default function AboutUs() {
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

    return <>{/* <Header /> */}</>;
}
