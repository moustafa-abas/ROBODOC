"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Register_img from "@/component/Register_img";
const Page = () => {
  const { register, handleSubmit, setFocus } = useForm();

  const onSubmit = (data) => {
    const code = data.code.join("");
    console.log(code);
  };

  const handleChange = (value, index) => {
    if (value.length === 1 && index < 3) {
      setFocus(`code.${index + 1}`);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      setFocus(`code.${index - 1}`);
    }
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
          className="mx-auto "
          width={200}
          height={1}
        />
        <hgroup className="mt-4 text-center ">
          <h1 className="font-semibold text-xl lg:text-3xl">
            التحقق من الجوال
          </h1>
          <p className="text-lg   text-[#54585bdd] mt-2">
            أدخل الرمز المرسل إلى 9661023456+ لتأكيد حسابك.
          </p>
        </hgroup>
        <form
          className=" mt-6   mx-1 lg:mx-6 "
          onSubmit={handleSubmit(onSubmit)}
          name="verify_form"
          id="verify_form"
        >
          <div className="flex justify-center gap-6">
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                maxLength={1}
                inputMode="numeric"
                autoFocus={i === 0}
                className=" w-14 h-14 rounded-lg sm:w-20 sm:h-18  sm:rounded-2xl focus:outline-0   caret-gray-500  border-2 border-[#B0B2B3] text-center text-xl"
                {...register(`code.${i}`, {
                  required: true,
                  pattern: /^[0-9]$/,
                  onChange: (e) => handleChange(e.target.value, i),
                })}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>
          <h2 className="mt-6 text-center font-semibold text-[#54585B]">
             لم يصلك الرمز؟  
            {/* <span className="text-[#51C143]">00:59</span> */}
            <span className="text-[#51C143] cursor-pointer" >إرسال مرة أخري </span>

          </h2>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white mt-8 sm:mt-14 h-12 rounded-xl cursor-pointer"
          >
            تأكيد
          </button>
        </form>
      </main>
    </div>
  );
};

export default Page;
