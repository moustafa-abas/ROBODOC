"use client";
import Register_img from "@/component/Register_img";

import { useState } from "react";
import Sign_page1 from "@/component/Sign_page1";
import Link from "next/link";
import Verify_overlay from "@/component/Verify_overlay";
import Sign_page2 from "@/component/Sign_page2";
import Sign_page3 from "@/component/Sign_page3";
const Page = () => {
  const [page, setPage] = useState(1);
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      <main className="   flex  justify-between  min-h-screen relative ">
        <aside className=" hidden sm:block w-2/5  sticky  top-0 bottom-0 h-screen  ">
          <Register_img />
        </aside>
        <section
          className="w-full sm:w-3/5 lg:w-2/5 px-3 sm:px-6  mx-auto    "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className=" flex  gap-5 items-center  my-8">
            {[1, 2, 3].map((i) => (
              <p
                key={i}
                className={`${page >= i ? "bg-[#51C143]" : "bg-[#E6E6E7]"} w-1/3 h-1 rounded-full`}
              ></p>
            ))}
            <p className="">{page}/3</p>
          </div>
          {page === 1 ? (
            <Sign_page1 />
          ) : page === 2 ? (
            <Sign_page2 />
          ) : page === 3 ? (
            <Sign_page3 />
          ) : null}

          <p className="text-center my-4   text-[#54585B] font-semibold text-lg ">
            عندك حساب بالفعل؟
            <Link href="/Register/Login" className="text-[#51C143] ms-1">
              تسجيل الدخول
            </Link>
          </p>
        </section>
      </main>
      {overlay ? <Verify_overlay /> : null}
    </>
  );
};

export default Page;
