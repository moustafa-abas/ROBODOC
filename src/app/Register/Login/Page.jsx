"use client";
import Image from "next/image";
import login_frame from "../../../../public/login frame.webp";
import logo from "../../../../public/logo.webp";
import { useForm } from "react-hook-form";
const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" px-2 sm:px-0 h-screen sm:flex items-center justify-between  ">
      <aside className=" hidden sm:block sm:w-2/5  h-full">
        <Image
          src={login_frame}
          alt="login frame"
          className="w-full  h-full "
        />
      </aside>
      <main className="w-full sm:w-2/5 mx-auto ">
        <Image src={logo} alt="login frame" className="mx-auto sm:mx-0" 
        />
        <hgroup className="mt-2 text-center sm:text-right">
          <h1 className="font-semibold text-xl lg:text-3xl">أدخل رقم الجوال</h1>
          <p className="text-lg lg:text-xl  text-[#54585bdd] mt-2">
            أدخل رقم جوالك لتسجيل الدخول
          </p>
        </hgroup>
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
            {errors?.phone ? (
              <p className="mt-2  text-red-500">* {errors?.phone?.message}</p>
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
          <div className="flex  items-center gap-2 mt-4 text-gray-400">
            <input
              name="remember"
              type="checkbox"
              className=" w-4 h-4 outline-0"
              {...register("remember")}
            />
            تذكرني
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white mt-4 sm:mt-10 h-12 rounded-xl cursor-pointer"
          >
            تسجيل الدخول
          </button>
        </form>
      </main>
    </div>
  );
};

export default Page;
