import React from "react";

const SixthSection = () => {
    return (
        <div className="bg-black flex flex-col py-10 justify-center items-center">
            <h2 className=" my-10 text-center font-bold text-lg md:text-2xl">
                <span className="text-white/50">Like having</span> 8 pro lenses
                in your pocket.
                <br />
                <span className="text-white/50">
                    Super-high-resolution{" "}
                </span>{" "}
                24MP photos by default.
            </h2>
            <img
                src="images/frame.jpg"
                className="w-[100%] object-cover object-left md:object-center"
                alt=""
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-10 p-12">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white text-xl" >48MP Fusion Main camera</h2>
                    <hr />
                    <ul className="font-semibold gap-2 flex flex-col text-white/50 text-lg">
                        <li>24/48 mm focal length (1x/2x)</li>
                        <li>ƒ/1.78 aperture</li>
                        <li>2.44 μm quad-pixel (1.22 μm individual)</li>
                    </ul>

                </div>
                 <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white text-xl" >48MP Fusion Ultra Wide camera</h2>
                    <hr />
                    <ul className="font-semibold gap-2 flex flex-col text-white/50 text-lg">
                        <li>13 mm focal length (.5x/macro)</li>
                        <li>ƒ/2.2 aperture</li>
                        <li>1.4 μm quad-pixel (0.7 μm individual)</li>
                    </ul>

                </div> <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white text-xl" >48MP Fusion Telephoto camera</h2>
                    <hr />
                    <ul className="font-semibold gap-2 flex flex-col text-white/50 text-lg">
                        <li>100/200 mm focal length (4x/8x)</li>
                        <li>ƒ/2.8 aperture</li>
                        <li>1.4 μm quad-pixel (0.7 μm individual)</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SixthSection;
