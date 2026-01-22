"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
const Login_form = () => {
const {
register,
handleSubmit,
formState: { errors },
} = useForm();

const onSubmit = (data) => {
console.log(data);
};
return (
<form
    className=" mt-6 sm:mt-12  mx-1 lg:mx-6 "
    onSubmit={handleSubmit(onSubmit)}
    name="login_form"
    id="login_form"
    autoComplete="login_form"
>
    <>
    <label
        htmlFor="phone"
        className="flex items-center gap-2 font-semibold"
    >
        رقم الجوال
        <span className="text-[#51C143]"> * </span>
    </label>
    <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex items-center gap-2 sm:gap-4 px-1 sm:px-2 ">
        <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="رقم الجوال"
        className=" w-full placeholder:font-semibold text-left focus:outline-0 caret-gray-400"
        maxLength={9}
        autoComplete="phone"
        {...register("phone", {
            required: "رقم الجوال مطلوب",
            pattern: {
            value: /^5\d{8}$/,
            message: " يجب ان يبدا الجوال ب 5 ويتكون من 9 ارقام ",
            },
        })}
        />
        <span className="text-xl ps-2 border-r-2 ">966+</span>
    </div>
    </>
    <>
    <label
        htmlFor="password"
        className="flex items-center gap-2 font-semibold mt-6"
    >
        كلمة المرور
        <span className="text-[#51C143]"> * </span>
    </label>
    <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
        <input
        type="password"
        placeholder="ادخل كلمة المرور "
        name="password"
        id="password"
        maxLength={16}
        className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
        {...register("password", {
            required: "كلمة المرور مطلوبة",
            minLength: {
            value: 8,
            message: "كلمة المرور لا تقل عن 8 حروف",
            },
            pattern: {
            value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: "لازم تحتوي على حرف كبير وصغير ورقم ورمز خاص",
            },
        })}
        />
    </div>
    </>
    <div className="flex  items-center gap-2 mt-4 text-gray-400">
    <input
        name="remember"
        type="checkbox"
        className=" w-4 h-4 outline-0"
        {...register("remember")}
    />
    تذكرني
    </div>

    <Button role="تسجيل الدخول" />
</form>
);
};

export default Login_form;
