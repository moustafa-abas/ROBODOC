"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Register_img from "@/component/Register_img";
import Link from "next/link";
const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" px-2 sm:px-0 h-screen sm:flex items-center justify-between  ">
      <aside className=" hidden sm:block sm:w-2/5  h-full">
        <Register_img />
      </aside>
      <main className="w-full sm:w-2/5 mx-auto ">
        <Image
          src="/logo.webp"
          alt="login frame"
          className="mx-auto sm:mx-0"
          width={200}
          height={1}
        />
        <hgroup className=" text-center sm:text-right">
          <h1 className="font-semibold text-xl lg:text-3xl">
            {" "}
            إنشاء حساب جديد{" "}
          </h1>
          <p className="text-lg lg:text-xl  text-[#54585bdd] mt-2">
            خلّيك أقرب لخدماتنا في خطوات بسيطة
          </p>
        </hgroup>
        <form
          className="  mt-6  mx-1 lg:mx-6 "
          onSubmit={handleSubmit(onSubmit)}
          name="login_form"
          id="login_form"
          autoComplete="login_form"
        >
          <>
            <label
              htmlFor="name"
              className="flex items-center gap-2 font-semibold mt-6"
            >
              الاسم
              <span className="text-[#51C143]"> * </span>
            </label>
            <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
              <input
                type="text"
                placeholder="ادخل الاسم  "
                name="name"
                id="name"
                className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
                {...register("name", {
                  required: "اسم المستخدم  مطلوب",
                })}
              />
            </div>
            {errors?.name ? (
              <p className="mt-2  text-red-500">* {errors?.name?.message}</p>
            ) : null}
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
                    message: "كلمة المرور لازم تكون 8 حروف على الأقل",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "لازم تحتوي على حرف كبير وصغير ورقم ورمز خاص",
                  },
                })}
              />
            </div>
            {errors?.password ? (
              <p className="mt-2  text-red-500">
                * {errors?.password?.message}
              </p>
            ) : null}
          </>
          <>
            <label
              htmlFor="password"
              className="flex items-center gap-2 font-semibold mt-6"
            >
              تاكيد كلمة المرور
              <span className="text-[#51C143]"> * </span>
            </label>
            <div className="border-2 border-[#E6E6E7]  mt-2 h-12 rounded-xl flex  px-2 ">
              <input
                type="password"
                placeholder="ادخل كلمة المرور "
                name="re_password"
                id="re_password"
                maxLength={16}
                className=" w-full placeholder:font-semibold  focus:outline-0 caret-gray-400"
                {...register("re_password", {
                  required: " تأكيد كلمة المرور مطلوب ",
                  minLength: {
                    value: 8,
                    message: "كلمة المرور لازم تكون 8 حروف على الأقل",
                  },
                  validate: (value) =>
                    value === watch("password") || "كلمة المرور غير متطابقة",
                })}
              />
            </div>
            {errors?.re_password ? (
              <p className="mt-2  text-red-500">
                * {errors?.re_password?.message}
              </p>
            ) : null}
          </>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white mt-6 h-12 rounded-xl cursor-pointer"
          >
            تسجيل الدخول
          </button>
          <p className="text-center mt-4   text-[#54585B] font-semibold text-lg ">
            عندك حساب بالفعل؟
            <Link href="/Register/Login" className="text-[#51C143] ">
              تسجيل الدخول
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Page;
