// import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    // Route,
    Link,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import InvalidLink from "./components/InvalidLink";
import ValidLink from "./components/ValidLink";
import Report from "./components/Report";

import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import Developer from "./components/Developer";
import Guide from "./components/Guide";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import LaunchApp from "./components/LaunchApp";

import Dashboard from "./components/farmers/Dashboard";
import CreateHub from "./components/farmers/CreateHub";
import AddCrop from "./components/farmers/AddCrop";
import SideBar from "./components/farmers/SideBar";

// FARMERS

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            { path: "", element: <Landing /> },
            { path: "pricing", element: <Pricing /> },
            { path: "developer", element: <Developer /> },
            { path: "guide", element: <Guide /> },
            { path: "about-us", element: <AboutUs /> },
            { path: "about-us", element: <AboutUs /> },
            { path: "launch-app", element: <LaunchApp /> },
        ],
    },

    {
        path: "/dashboard/",
        // element: null,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "create-hub", element: <CreateHub /> },
            { path: "add-crop", element: <AddCrop /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
