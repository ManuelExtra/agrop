import React from "react";

import createHub from "../../assets/svgs/create-hub.svg";

import verified from "../../assets/svgs/verified.svg";
import crops from "../../assets/svgs/crops.svg";

import SideBar from "./SideBar";

import crop1 from "../../assets/svgs/crop1.svg";
import crop2 from "../../assets/svgs/crop2.svg";
import discount from "../../assets/svgs/discount.svg";

export default function CreateHub() {
    return (
        <div>
            <div className="flex max-sm:flex-wrap">
                <div className="flex-initial w-1/4 bg-green-500 h-screen leftSide fixed">
                    <SideBar route={"hub"} />
                </div>

                <div
                    className="flex-initial w-full bg-red-500 h-screen bg-white"
                    style={{ marginLeft: "25%" }}
                >
                    <div className="p-5">
                        <div>
                            <p className="font-black text-2xl title">
                                Create Hub
                                <button className="p-2 px-3 rounded float-right text-sm font-normal discount text-white">
                                    <div className="flex">
                                        <img src={discount} alt="Discount" />
                                        <span className="ml-2">Disconnect</span>
                                    </div>
                                </button>
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-3">
                                <div>
                                    <label className="font-bold text-sm">
                                        Hub Name
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 border rounded w-full"
                                        placeholder="Enter hub name"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-sm">
                                        Hub Location
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 rounded w-full"
                                        placeholder="Enter hub location"
                                    />
                                </div>

                                <div>
                                    <label className="font-bold text-sm">
                                        Hub Description
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 rounded w-full"
                                        placeholder="Enter hub description"
                                    />
                                </div>

                                <div className="flex">
                                    <div>
                                        <label className="font-bold text-sm">
                                            Upload Hub Image
                                        </label>
                                        <br />
                                        <input
                                            type={"file"}
                                            className="p-2 border-2 mt-2 rounded w-full"
                                            placeholder="Enter hub description"
                                        />
                                    </div>
                                    <div className="flex justify-center items-center mt-4">
                                        <button className="p-3 px-4 text-white rounded-xl ml-2 bg-green-700 font-bold">
                                            Upload
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="font-bold text-sm">
                                        Phone Number
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 rounded w-full"
                                        placeholder="+234 8012 34 5678"
                                    />
                                </div>

                                <div className="flex">
                                    <div>
                                        <label className="font-bold text-sm">
                                            Upload Document
                                        </label>
                                        <br />
                                        <input
                                            type={"file"}
                                            className="p-2 border-2 mt-2 rounded w-full"
                                            placeholder="Enter hub description"
                                        />
                                    </div>
                                    <div className="flex justify-center items-center mt-4">
                                        <button className="p-3 px-4 text-white rounded-xl ml-2 bg-green-700 font-bold">
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="p-3 px-4 text-white rounded-xl ml-2 bg-green-700 mt-5 hover:bg-green-800 font-bold">
                            Submit
                        </button>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
