import React from "react";

import createHub from "../../assets/svgs/create-hub.svg";

import verified from "../../assets/svgs/verified.svg";
import crops from "../../assets/svgs/crops.svg";

import SideBar from "./SideBar";

import crop1 from "../../assets/svgs/crop1.svg";
import crop2 from "../../assets/svgs/crop2.svg";
import discount from "../../assets/svgs/discount.svg";

export default function Dashboard() {
    return (
        <div>
            <div className="flex max-sm:flex-wrap">
                <div className="flex-initial w-1/4 bg-green-500 h-screen leftSide fixed">
                    <SideBar route={"dashboard"} />
                </div>

                <div
                    className="flex-initial w-full bg-red-500 h-screen bg-white"
                    style={{ marginLeft: "25%" }}
                >
                    <div className="p-5">
                        <div>
                            <p className="font-black text-2xl title">
                                Dashboard
                                <button className="p-2 px-3 rounded float-right text-sm font-normal discount text-white">
                                    <div className="flex">
                                        <img src={discount} alt="Disconnect" />
                                        <span className="ml-2">Disconnect</span>
                                    </div>
                                </button>
                            </p>
                        </div>
                        <p className="mt-10 font-black text-md text-gray-500">
                            Your Hub(2)
                        </p>

                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-10 gap-3 mb-7">
                                <div className="hubBox">
                                    <div className="flex">
                                        <img
                                            src={crops}
                                            className="rounded-2xl cropStyle"
                                            alt="Crops"
                                        />
                                        <div className="ml-3 pt-2 pr-2 justify-center flex flex-column">
                                            <p className="text-sm font-black justify-start items-start">
                                                Ridwan Farm
                                            </p>
                                            <p className="text-xs">
                                                This is a farm that focuses on
                                                crop produce...
                                            </p>
                                            <div className="flex">
                                                <div>
                                                    <img
                                                        src={verified}
                                                        alt="crops"
                                                        className="verifiedStyle"
                                                    />
                                                </div>
                                                <div className="flex-initial w-full text-gray-500">
                                                    verified
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hubBox">
                                    <div className="flex">
                                        <img
                                            src={crops}
                                            className="rounded-2xl cropStyle"
                                            alt="Crops"
                                        />
                                        <div className="ml-3 pt-2 pr-2 justify-center flex flex-column">
                                            <p className="text-md font-black justify-start items-start">
                                                Ridwan Farm
                                            </p>
                                            <p className="text-xs">
                                                This is a farm that focuses on
                                                crop produce...
                                            </p>
                                            <div className="flex">
                                                <div>
                                                    <img
                                                        src={verified}
                                                        alt="crops"
                                                        className="verifiedStyle"
                                                    />
                                                </div>
                                                <div className="flex-initial w-full text-gray-500">
                                                    verified
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="createHub grid items-center justify-center rounded-3xl shadow">
                                    <div>
                                        <img
                                            src={createHub}
                                            alt="create ahub"
                                            className="creatHubIconStyle"
                                        />
                                        <p className="text-xs -mb-2 mt-2">
                                            Create
                                        </p>
                                        <span className="text-xs">New Hub</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 pt-0">
                        <p className="font-black text-md text-gray-500">
                            Added Crop (2)
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-10 gap-4 mb-7">
                            <div>
                                <img
                                    src={crop1}
                                    alt="Crop1"
                                    className="border w-full rounded-3xl"
                                />

                                <div className="mt-2">
                                    <span className="font-normal text-sm mt-2">
                                        Name: Sweet Orange
                                    </span>
                                    <br />
                                    <p className="font-normal text-sm mt-2">
                                        Quality:{" "}
                                        <span className="text-green-600">
                                            70%
                                        </span>
                                    </p>
                                    <p className="font-black text-sm">
                                        Price: 0.06 ETH
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={crop2}
                                    alt="Crop1"
                                    className="border w-full rounded-3xl"
                                />

                                <div className="mt-2">
                                    <span className="font-normal text-sm mt-2">
                                        Name: Sweet Orange
                                    </span>
                                    <br />
                                    <p className="font-normal text-sm mt-2">
                                        Quality:{" "}
                                        <span className="text-green-600">
                                            70%
                                        </span>
                                    </p>
                                    <p className="font-black text-sm">
                                        Price: 0.06 ETH
                                    </p>
                                </div>
                            </div>

                            <button className="createHub grid items-center justify-center rounded-3xl shadow">
                                <div>
                                    <img
                                        src={createHub}
                                        alt="create ahub"
                                        className="creatHubIconStyle"
                                    />
                                    <p className="text-xs -mb-2 mt-2">Add</p>
                                    <span className="text-xs">New Crop</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
