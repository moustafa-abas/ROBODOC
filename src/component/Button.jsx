import React from "react";

const Button = (data) => {
const role = data.role;
return (
<button
    type="submit"
    className="w-full bg-blue-500 text-white mt-8 h-12 rounded-xl cursor-pointer"
>
    {role}
</button>
);
};

export default Button;
