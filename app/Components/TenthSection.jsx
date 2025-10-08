import React from "react";

const TenthSection = () => {
    return (
        <div className="bg-black flex text-xl font-semibold gap-2 flex-col px-14 justify-center py-10 items-center">
            <h3 className="text-[#FF7310] w-full px-3 text-center">
                Accessories
            </h3>
            <h2 className=" text-3xl md:text-7xl font-bold px-3 w-full  text-center ">
                Pro pairings.
            </h2>
            <div className="flex w-full  my-6 gap-6  flex-col md:flex-row  justify-center items-center">
                <div className="flex gap-6 flex-col  lg:w-[400px] w-[350px] ">
                    <img
                        src="/images/tenth_img_one.jpg"
                        className="w-[350px] h-[350px] object-cover  rounded-3xl lg:w-[400px]  lg:h-[400px]"
                        alt=""
                    />
                    <p className="text-sm text-wrap">
                        TechWoven Case. Made from a custom technical woven
                        fabric of multiple coloured yarns. The sides of the case
                        are coated and textured for a better grip. Available in
                        five colours.
                    </p>
                </div>

                <div className="flex gap-6 flex-col  lg:w-[400px] w-[350px]">
                    <img
                        src="/images/tenth_img_two.jpg"
                        className=" w-[350px] h-[350px] object-cover  rounded-3xl lg:w-[400px]  lg:h-[400px]"
                        alt=""
                    />
                    <p className="text-sm text-wrap">
                        TechWoven Case. Made from a custom technical woven
                        fabric of multiple coloured yarns. The sides of the case
                        are coated and textured for a better grip. Available in
                        five colours.
                    </p>
                </div>
                  <div className="flex gap-6 flex-col  lg:w-[400px] w-[350px]">
                    <img
                        src="/images/tenth_img_three.jpg"
                        className="w-[350px] h-[350px] object-cover  rounded-3xl lg:w-[400px]  lg:h-[400px]"
                        alt=""
                    />
                    <p className="text-sm text-wrap">
                        TechWoven Case. Made from a custom technical woven
                        fabric of multiple coloured yarns. The sides of the case
                        are coated and textured for a better grip. Available in
                        five colours.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TenthSection;
