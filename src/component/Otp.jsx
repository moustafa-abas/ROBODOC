import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Head from "./Head";

const Otp = () => {
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
    <>
      <Head
        data={{
          h: "التحقق من الجوال",
          p: "أدخل الرمز المرسل إلى 9661023456+ لتأكيد حسابك.",
          classname: " text-center ",
        }}
      />

      <form
        className=" mt-6   "
        onSubmit={handleSubmit(onSubmit)}
        name="verify_form"
        id="verify_form"
      >
        <main className="mx-1 lg:mx-6 ">
          <div className="flex justify-center gap-6">
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                maxLength={1}
                inputMode="numeric"
                autoFocus={i === 0}
                className=" w-14 h-14 rounded-lg sm:w-18 sm:h-18  sm:rounded-2xl focus:outline-0   caret-gray-500  border-2 border-[#B0B2B3] text-center text-xl"
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
            <span className="text-[#51C143] cursor-pointer">
              إرسال مرة أخري{" "}
            </span>
          </h2>
        </main>

        <Button role="تأكيد" />
      </form>
    </>
  );
};

export default Otp;
