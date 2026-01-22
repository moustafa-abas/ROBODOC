import Register_img from "@/component/Register_img";
import Head from "@/component/Head";
import Login_form from "@/component/Login_form";
const Page = () => {
  return (
    <div className=" px-2 sm:px-0 h-screen sm:flex  items-center justify-between  ">
      <aside className=" hidden sm:block sm:w-2/5  h-full">
        <Register_img />
      </aside>
      <main
        className="w-full sm:w-2/5 mx-auto mt-10 sm:mt-0 "
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
