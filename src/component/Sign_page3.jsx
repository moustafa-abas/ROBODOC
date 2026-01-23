"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/component/Button";
import Image from "next/image";
import Alert from "./Alert";
import Head from "./Head";
const Sign_page3 = () => {
const {
register,
handleSubmit,
formState: { errors },
watch,
} = useForm();
const [Page, setPage] = useState(1);
const onSubmit = (data) => {
console.log(data);
setPage(3);
};
return (
<main data-aos="zoom-in" data-aos-duration="1000">
    <Head
    data={{
        h: " بيانات استلام المستحقات",
        p: "سيتم تحويل مستحقاتك المالية إلى الحساب البنكي التالي.",
        img: true,
    }}
    />
    <form
    className="  mt-6   "
    onSubmit={handleSubmit(onSubmit)}
    name="sign_form3"
    id="sign_form3"
    autoComplete="sign_form3"
    >
    <div className="mx-1 lg:mx-6">
        <>
        <label
            htmlFor="acc_name"
            className="flex items-center gap-2 font-semibold mt-6"
        >
            اسم صاحب الحساب{" "}
            <span
            className={`${errors?.acc_name ? "text-red-600" : "text-[#51C143]"} text-xl`}
            >
            *
            </span>
        </label>
        <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
            <input
            type="text"
            placeholder=" الاسم كما هو مسجل في البنك "
            name="acc_name"
            id="acc_name"
            autoComplete="acc_name"
            className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
            {...register("acc_name", {
                required: " اسم صاحب الحساب مطلوب ",
            })}
            />
        </div>
        {errors?.acc_name?.message ? (
            <Alert errors={errors?.acc_name?.message} />
        ) : null}
        </>
        <>
        <label
            htmlFor="bank_name"
            className="flex items-center gap-2 font-semibold mt-6"
        >
            اسم البنك{" "}
            <span
            className={`${errors?.bank_name ? "text-red-600" : "text-[#51C143]"} text-xl`}
            >
            *
            </span>
        </label>
        <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
            <input
            type="text"
            placeholder=" اسم البنك"
            name="bank_name"
            id="bank_name"
            autoComplete="bank_name"
            className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
            {...register("bank_name", {
                required: " اسم البنك مطلوب ",
            })}
            />
        </div>
        {errors?.bank_name?.message ? (
            <Alert errors={errors?.bank_name?.message} />
        ) : null}
        </>
        <>
        <label
            htmlFor="iban"
            className="flex items-center gap-2 font-semibold mt-6"
        >
            رقم الآيبان (IBAN)
            <span
            className={`${errors?.iban ? "text-red-600" : "text-[#51C143]"} text-xl`}
            >
            *
            </span>
        </label>
        <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
            <input
            type="number"
            placeholder=" SA**** **** **** **** ****"
            name="iban"
            id="iban"
            autoComplete="iban"
            className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
            {...register("iban", {
                required: " رقم الآيبان  مطلوب",
            })}
            />
        </div>
        {errors?.iban?.message ? (
            <Alert errors={errors?.iban?.message} />
        ) : null}
        </>
    </div>

    <Button role="إنشاء حساب جديد" />
    </form>
</main>
);
};

export default Sign_page3;
