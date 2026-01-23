"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/component/Button";
import Image from "next/image";
import Alert from "./Alert";
import Head from "./Head";
const Sign_page2 = () => {
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
        h: "المعلومات المهنية",
        p: "تساعدنا في التحقق من أهليتك الطبية وربطك بالحالات المناسبة.",
        img: true,
    }}
    />
    <form
    className="  mt-6  "
    onSubmit={handleSubmit(onSubmit)}
    name="sign_form2"
    id="sign_form2"
    autoComplete="sign_form2"
    >
    <div className="mx-1 lg:mx-6 ">
        <>
        <label
            htmlFor="job_name"
            className="flex items-center gap-2 font-semibold mt-6"
        >
            المسمي الوظيفي
            <span
            className={`${errors?.job_name ? "text-red-600" : "text-[#51C143]"} text-xl`}
            >
            *
            </span>
        </label>

        <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2  relative">
            <select
            name="job_name"
            id="job_name"
            className={`w-full z-10 focus:outline-0 appearance-none  ${watch("job_name") === "" ? "text-[#8A8C8E]" : null}`}
            defaultValue=""
            {...register("job_name", { required: "المسمي الوظيفي مطلوب" })}
            >
            <option value="" disabled hidden>
                اختر المسمى الوظيفي
            </option>
            <option value="male" className="text-black">
                دكتور اطفال
            </option>
            <option value="female" className="text-black">
                دكتور
            </option>
            </select>
            <Image
            src="/arrow-down.svg"
            alt="arrow down"
            width={20}
            height={2}
            className="absolute top-1/2 -translate-y-1/2 left-5 z-0 "
            />
        </div>
        {errors?.job_name?.message ? (
            <Alert errors={errors?.job_name?.message} />
        ) : null}
        </>
        <>
        <label
            htmlFor="Specialization"
            className="flex items-center gap-2 font-semibold mt-6"
        >
            التخصص الدقيق
            <span
            className={`${errors?.Specialization ? "text-red-600" : "text-[#51C143]"} text-xl`}
            >
            *
            </span>
        </label>
        <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2  relative">
            <select
            name="Specialization"
            id="Specialization"
            className={`w-full z-10 focus:outline-0 appearance-none  ${watch("Specialization") === "" ? "text-[#8A8C8E]" : null}`}
            defaultValue=""
            {...register("Specialization", {
                required: "التخصص  الدقيق مطلوب",
            })}
            >
            <option value="" disabled hidden>
                اختر التخصص الدقيق
            </option>
            <option value="male" className="text-black">
                دكتور اطفال
            </option>
            <option value="female" className="text-black">
                دكتور
            </option>
            </select>
            <Image
            src="/arrow-down.svg"
            alt="arrow down"
            width={20}
            height={2}
            className="absolute top-1/2 -translate-y-1/2 left-5 z-0 "
            />
        </div>
        {errors?.Specialization?.message ? (
            <Alert errors={errors?.Specialization?.message} />
        ) : null}
        </>

        <>
        <label
            htmlFor="Work_destination"
            className="flex items-center gap-2 font-semibold mt-6"
        >
            جهة العمل
            <span
            className={`${errors?.Work_destination ? "text-red-600" : "text-[#51C143]"} text-xl`}
            >
            *
            </span>
        </label>
        <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
            <input
            type="text"
            placeholder=" اكتب اسمك كما هو مسجل في الهوية  "
            name="Work_destination"
            id="Work_destination"
            autoComplete="Work_destination"
            className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
            {...register("Work_destination", {
                required: "جهة العمل مطلوبة",
            })}
            />
        </div>
        {errors?.Work_destination?.message ? (
            <Alert errors={errors?.Work_destination?.message} />
        ) : null}
        </>
        <>
        <label
            htmlFor="ex"
            className="flex items-center gap-2 font-semibold mt-6"
        >
            سنوات الخبرة{" "}
            <span
            className={`${errors?.ex ? "text-red-600" : "text-[#51C143]"} text-xl`}
            >
            *
            </span>
        </label>
        <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
            <input
            type="number"
            placeholder=" مثال : 10 "
            name="ex"
            id="ex"
            autoComplete="ex"
            className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
            {...register("ex", {
                required: "سنوات الخبرة مطلوبة  ",
            })}
            />
        </div>
        {errors?.ex?.message ? (
            <Alert errors={errors?.ex?.message} />
        ) : null}
        </>
        <>
        <label
            htmlFor="Classification_number"
            className="flex items-center gap-2 font-semibold mt-6"
        >
            رقم التصنيف المهني (SCFHS License Number){" "}
            <span
            className={`${errors?.Classification_number ? "text-red-600" : "text-[#51C143]"} text-xl`}
            >
            *
            </span>
        </label>
        <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
            <input
            type="number"
            placeholder=" أدخل رقم التصنيف المهني"
            name="Classification_number"
            id="Classification_number"
            autoComplete="Classification_number"
            className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
            {...register("Classification_number", {
                required: " رقم التصنيف المهني مطلوب ",
            })}
            />
        </div>
        {errors?.Classification_number?.message ? (
            <Alert errors={errors?.Classification_number?.message} />
        ) : null}
        </>
    </div>

    <Button role="متابعة" />
    </form>
</main>
);
};

export default Sign_page2;
