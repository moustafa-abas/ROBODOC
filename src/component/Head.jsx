import Image from "next/image";
import React from "react";

const Head = (data) => {
  const info = data.data;
  return (
    <hgroup
      className={` mt-2   ${info?.classname ? `${info?.classname}` : "sm:text-right"} `}
    >
      <h1
        className={`font-semibold text-xl lg:text-3xl  ${info?.img ? "flex justify-between" : null}`}
      >
        {info?.h}
        {info.img ? (
          <button className="w-10 h-10 cursor-pointer  ">
            <Image
              src="/back_arrow.svg"
              alt="back_arrow"
              width={35}
              height={35}
            />
          </button>
        ) : null}
      </h1>
      <p className="text-lg lg:text-xl  text-[#54585bdd] mt-2">{info?.p}</p>
    </hgroup>
  );
};

export default Head;
