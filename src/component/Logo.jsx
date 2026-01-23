import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.webp"
      alt="login frame"
      className="mx-auto "
      width={200}
      height={1}
    />
  );
};

export default Logo;
