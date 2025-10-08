import {
    ChevronDown,
    ChevronRight,
    Earth,
    Lock,
    Package,
    PersonStanding,
    Plus,
    Recycle,
    Zap,
} from "lucide-react";
import React from "react";

const TwelvthSection = () => {
    return (
        <div className="bg-[#F5F5F7] p-10 md:p-16 flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
                Our values lead the way.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-center item-center">
                <div className="flex gap-2 relative flex-col p-8 bg-white shadow-md rounded-2xl">
                    <Earth className="text-black" size={35} />
                    <h3 className="text-black font-bold">
                        A plan as innovative
                        <br />
                        as our products.
                    </h3>
                    <p className="text-black/70 font-semibold">
                        We're committed to bringing net emissions to zero across
                        our entire carbon footprint by 2030.
                    </p>
                    <p className="text-[#0043fa] flex">
                        Learn more about environment <ChevronRight />
                    </p>
                </div>
                <div className="flex gap-2 flex-col  relative p-8 bg-white shadow-md rounded-2xl">
                    <Lock className="text-black" size={35} />
                    <h3 className="text-black font-bold">
                        Privacy. That's Apple.
                        <br/>
                    </h3>
                    
                    <p className="text-black/70 font-semibold">
                        Privacy is a fundamental human right. Every product and service is designed to help keep your data safe and secure.
                    </p>
                    <p className="text-[#0043fa] flex">
                        Learn more about privacy <ChevronRight />
                    </p>
                </div>
                <div className="flex gap-2 flex-col p-8  relative bg-white shadow-md rounded-2xl">
                    <PersonStanding className="text-black border-2 rounded-full" size={35} />
                    <h3 className="text-black font-bold">
                        Innovation that's
                        <br />
                        accessible by design.
                    </h3>
                    <p className="text-black/70 font-semibold">
                        Our products and services are designed for everyone,with built-in features to help you do what you love,your way.
                    </p>
                    <p className="text-[#0043fa] flex">
                        Learn more about accessibility <ChevronRight />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TwelvthSection;
