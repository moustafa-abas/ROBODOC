import React from "react";
import Otp from "./Otp";

const Verify_overlay = () => {
return (
<div
    className="fixed w-full  inset-0  bg-[#1E1F2C50] flex justify-center items-center  "
    data-aos="zoom-in"
    data-aos-duration="1000"
>
    <div className="w-full md:w-1/2 lg:w-1/3 bg-[#FAFAFA] p-6 rounded-2xl">
    <Otp />
    </div>
</div>
);
};

export default Verify_overlay;
