"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Register_img from "@/component/Register_img";
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



    { /* Alert Error */ }
    <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center  max-w-lg absolute left-0 top-0 " data-aos="fade-right" data-aos-duration="3000">
        <span className="text-red-800"> في خطأ في البيانات  </span>

        <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
            <path fill="currentColor" d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
            </path>
        </svg>
    </div>
    { /* End Alert Error */ }

    
    </div>
  );
};

export default Page;
