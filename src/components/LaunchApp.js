import { Button } from "flowbite-react";
import React from "react";
import crops from "../assets/svgs/crops.svg";
import verified from "../assets/svgs/verified.svg";

import crop1 from "../assets/svgs/crop1.svg";
import crop2 from "../assets/svgs/crop2.svg";
import crop3 from "../assets/svgs/crop3.svg";
import crop4 from "../assets/svgs/crop4.svg";

export default function LaunchApp() {
    return (
        <div>
            <div class="flex max-sm:flex-wrap box mt-5 py-4 px-5">
                <div class="flex-initial w-full">
                    <p className="text-3xl font-black guide">
                        Take few minute to connect your wallet
                    </p>
                    <p className="text-md">
                        Connecting farmers with small and large startup to
                        consumers producing quality and <br />
                        good produce by improving sustainability.
                    </p>
                </div>
                <div class="flex-initial w-64 flex items-center justify-center max-sm:justify-start max-sm:items-start">
                    <Button
                        color="success"
                        className="raleway main-bgcolor main-bgcolor:hover"
                    >
                        Connect
                    </Button>
                </div>
            </div>

            <div className="mt-20">
                <p className="text-xl font-black">Available Hubs</p>

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
                                    <p className="text-xl font-black justify-start items-start">
                                        Ridwan Farm
                                    </p>
                                    <p className="text-sm">
                                        This is a farm that focuses on crop
                                        produce...
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
                                    <p className="text-xl font-black justify-start items-start">
                                        Ridwan Farm
                                    </p>
                                    <p className="text-sm">
                                        This is a farm that focuses on crop
                                        produce...
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
                        </div>{" "}
                        <div className="hubBox">
                            <div className="flex">
                                <img
                                    src={crops}
                                    className="rounded-2xl cropStyle"
                                    alt="Crops"
                                />
                                <div className="ml-3 pt-2 pr-2 justify-center flex flex-column">
                                    <p className="text-xl font-black justify-start items-start">
                                        Ridwan Farm
                                    </p>
                                    <p className="text-sm">
                                        This is a farm that focuses on crop
                                        produce...
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
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <p className="text-xl font-black">Available Crops</p>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-10 gap-4 mb-7">
                    <div>
                        <img
                            src={crop1}
                            alt="Crop1"
                            className="border w-full rounded-3xl"
                        />

                        <div className="mt-2">
                            <span className="font-black text-sm">
                                <span className="font-normal">Hub:</span> Ridwan
                                Farm
                            </span>
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
                            <span className="font-normal text-sm mt-2">
                                Name: Sweet Orange
                            </span>
                            <br />
                            <p className="font-normal text-sm mt-2">
                                Quality:{" "}
                                <span className="text-green-600">70%</span>
                            </p>
                            <p className="font-black text-sm">
                                Price: 0.06 ETH
                            </p>

                            <Button
                                color="success"
                                className="raleway main-bgcolor main-bgcolor:hover w-full text-4xl"
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>

                    <div>
                        <img
                            src={crop2}
                            alt="Crop1"
                            className="border w-full rounded-3xl"
                        />

                        <div className="mt-2">
                            <span className="font-black text-sm">
                                <span className="font-normal">Hub:</span> Ridwan
                                Farm
                            </span>
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
                            <span className="font-normal text-sm mt-2">
                                Name: Sweet Orange
                            </span>
                            <br />
                            <p className="font-normal text-sm mt-2">
                                Quality:{" "}
                                <span className="text-green-600">70%</span>
                            </p>
                            <p className="font-black text-sm">
                                Price: 0.06 ETH
                            </p>

                            <Button
                                color="success"
                                className="raleway main-bgcolor main-bgcolor:hover w-full text-4xl"
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img
                            src={crop3}
                            alt="Crop1"
                            className="border w-full rounded-3xl"
                        />

                        <div className="mt-2">
                            <span className="font-black text-sm">
                                <span className="font-normal">Hub:</span> Ridwan
                                Farm
                            </span>
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
                            <span className="font-normal text-sm mt-2">
                                Name: Sweet Orange
                            </span>
                            <br />
                            <p className="font-normal text-sm mt-2">
                                Quality:{" "}
                                <span className="text-green-600">70%</span>
                            </p>
                            <p className="font-black text-sm">
                                Price: 0.06 ETH
                            </p>

                            <Button
                                color="success"
                                className="raleway main-bgcolor main-bgcolor:hover w-full text-4xl"
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                    <div>
                        <img
                            src={crop4}
                            alt="Crop1"
                            className="border w-full rounded-3xl"
                        />

                        <div className="mt-2">
                            <span className="font-black text-sm">
                                <span className="font-normal">Hub:</span> Ridwan
                                Farm
                            </span>
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
                            <span className="font-normal text-sm mt-2">
                                Name: Sweet Orange
                            </span>
                            <br />
                            <p className="font-normal text-sm mt-2">
                                Quality:{" "}
                                <span className="text-green-600">70%</span>
                            </p>
                            <p className="font-black text-sm">
                                Price: 0.06 ETH
                            </p>

                            <Button
                                color="success"
                                className="raleway main-bgcolor main-bgcolor:hover w-full text-4xl"
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
