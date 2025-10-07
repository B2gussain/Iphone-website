import React from "react";

const ForthSection = () => {
    return (
        <div className="bg-black flex-col gap-4 py-10 flex justify-center ">
            <p className="text-[#FF7310] text-center text-2xl font-semibold">
                Cameras
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center">
                A big zoom forward.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
                {" "}
                <img src="/images/forth_phone.jpg" alt="" />
                <div className="grid gap-4 grid-cols-2 px-12 py-8 md:grid-cols-1">
                    <div className="flex flex-col     ">
                        <p className="font-bold text-xl text-white/50">Up to</p>
                        <p className="text-5xl text-[#FF7310] font-bold">8x</p>
                        <p className="text-xl font-bold text-white/50">
                            optical-quality zoom
                        </p>
                    </div>
                    <div className="flex flex-col   ">
                        <p className="font-bold text-xl text-white/50">All</p>
                        <p className="text-5xl text-[#FF7310] font-bold">48MP</p>
                        <p className="text-xl font-bold text-white/50">
                            rear cameras
                        </p>
                    </div>
                </div>
                
            </div>
            <p className="text-white/50 font-semibold md:text-center px-6 md:w-[70%] md:mx-auto md:mt-8  text-balance">Across the iPhone 17 Pro camera system, you’ll find innovation that goes to great lengths. The telephoto features the next generation of our tetraprism design and a 56% larger sensor. With an equivalent 200 mm focal length, the 8x optical-quality zoom makes this <span className="text-white"> the longest iPhone Telephoto ever</span> — offering 16x total optical zoom range. So you can explore an even wider range of creative choices and add a longer reach to your compositions.</p>
        </div>
    );
};

export default ForthSection;
