import Register_img from "@/component/Register_img";
import Head from "@/component/Head";
import Login_form from "@/component/Login_form";
const Page = () => {
  return (
    <div className="   flex items-center justify-between  min-h-screen relative  ">
      <aside className=" hidden sm:block w-2/5  sticky  top-0 bottom-0 h-screen  ">
        <Register_img />
      </aside>
      <main
        className="w-full sm:w-3/5 lg:w-2/5 px-3 sm:px-6  mx-auto pb-10   "
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <Head
          data={{ h: "أدخل رقم الجوال", p: "أدخل رقم جوالك لتسجيل الدخول" }}
        />

        <Login_form />
      </main>
    </div>
  );
};

export default Page;
