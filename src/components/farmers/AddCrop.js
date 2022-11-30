import React from "react";

import createHub from "../../assets/svgs/create-hub.svg";

import verified from "../../assets/svgs/verified.svg";
import crops from "../../assets/svgs/crops.svg";

import SideBar from "./SideBar";

import crop1 from "../../assets/svgs/crop1.svg";
import crop2 from "../../assets/svgs/crop2.svg";
import discount from "../../assets/svgs/discount.svg";

export default function AddCrop() {
    return (
        <div>
            <div className="flex max-sm:flex-wrap">
                <div className="flex-initial w-1/4 bg-green-500 h-screen leftSide fixed">
                    <SideBar route="crop" />
                </div>

                <div
                    className="flex-initial w-full bg-red-500 h-screen bg-white"
                    style={{ marginLeft: "25%" }}
                >
                    <div className="p-5">
                        <div>
                            <p className="font-black text-2xl title">
                                Add Crop
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
                                        Hub Address
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 border rounded w-full"
                                        placeholder="Enter hub address"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold text-sm">
                                        Harvest Time
                                    </label>
                                    <br />
                                    <select className="p-2 border-2 mt-2 rounded w-full">
                                        <option>Enter harvest tool used</option>
                                        <option>Rainy Season</option>
                                        <option>Dry Season</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="font-bold text-sm">
                                        Crop Description
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 rounded w-full"
                                        placeholder="Enter crop description"
                                    />
                                </div>

                                <div>
                                    <label className="font-bold text-sm">
                                        Harvest Tool Used
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 rounded w-full"
                                        placeholder="Enter harvest tool used"
                                    />
                                </div>

                                <div>
                                    <label className="font-bold text-sm">
                                        Soil Type
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 rounded w-full"
                                        placeholder="Enter soil type"
                                    />
                                </div>

                                <div>
                                    <label className="font-bold text-sm">
                                        Enter Price
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 rounded w-full"
                                        placeholder="Enter crop price (ETH)"
                                    />
                                </div>

                                <div>
                                    <label className="font-bold text-sm">
                                        Climate condition
                                    </label>
                                    <br />
                                    <input
                                        className="p-2 border-2 mt-2 rounded w-full"
                                        placeholder="Enter between 0 - 100 degree"
                                    />
                                </div>

                                <div className="flex">
                                    <div>
                                        <label className="font-bold text-sm">
                                            Upload Crop Image
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

                        <button className="p-3 px-5 text-white rounded-xl ml-2 bg-green-700 mt-5 hover:bg-green-800 font-bold">
                            Submit
                        </button>

                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
