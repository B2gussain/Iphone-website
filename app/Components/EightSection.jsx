import React from "react";

const EightSection = () => {
    return (
        <div className="bg-black flex text-xl font-semibold gap-2 flex-col px-4 justify-center py-10 items-center">
            <h3 className="text-[#FF7310] w-full px-3 md:text-center">
                Performance
            </h3>
            <h2 className="text-4xl font-bold px-3 w-full  md:text-center ">
                New dimensions <br />
                in power.
            </h2>
            <p className="text-white/50 px-3 md:w-[60%] text-balance font-semibold md:text-center">
                Whether you’re working with intensive graphics or massive media
                files, iPhone 17 Pro offers blazing-fast performance — with
                advanced cooling technology. An Apple-designed laser-welded
                vapour chamber works with the aluminium unibody structure to
                efficiently move heat away from the A19 Pro chip, allowing for
                even{" "}
                <span className="text-white">
                    {" "}
                    higher sustained performance
                </span>{" "}
                This breakthrough in thermal management is key to the most
                powerful iPhone ever created.
            </p>
            <div className="relative overflow-hidden md:mt-6 w-full md:aspect-16/9 h-[300px]">
                <img
                    src="/images/video_frame.png"
                    className="absolute z-50 top-0 left-0 w-full h-full drop-shadow-white/50 drop-shadow-md object-contain"
                    alt="Frame"
                />
                <img
                    src="/images/pro_img.jpg"
                    className="absolute z-40 top-1/2 -translate-y-1/2 left-0 w-full h-[80%] object-center object-contain"
                    alt="Background"
                />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12  p-4 md:p-10">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white text-xl" >A19 Pro chip</h2>
                    <hr />
                    <p className="font-semibold gap-2 flex flex-col text-white/50 text-lg">
                       The Apple silicon powering iPhone 17 Pro delivers the highest iPhone performance ever, ideal for advanced gaming and the most demanding tasks.
                    </p>

                </div>
                 <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white text-xl" >Graphics and speed</h2>
                    <hr />
                    <p className="font-semibold gap-2 flex flex-col text-white/50 text-lg">
                       Paired with an innovative thermal design, the GPU and CPU deliver up to 40% better sustained performance.
                    </p>

                </div> <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-white text-xl" >Neural Accelerators</h2>
                    <hr />
                    <p className="font-semibold gap-2 flex flex-col text-white/50 text-lg">
                        With Neural Accelerators integrated into each GPU core, iPhone 17 Pro is more powerful than ever when working with local AI models.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default EightSection;
