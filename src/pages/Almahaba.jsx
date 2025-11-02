import React from "react";
import ph1 from "../assets/ph1.jpg";
import ph2 from "../assets/ph2.JPG";
import ph3 from "../assets/ph3.JPG";
import ph4 from "../assets/ph4.JPG";
import ph5 from "../assets/ph5.png";
import ph6 from "../assets/ph6.png";
import ph7 from "../assets/ph7.JPG";
import ph8 from "../assets/ph8.JPG";
import ph9 from "../assets/ph9.JPEG";
import ph10 from "../assets/ph10.png";
import ph11 from "../assets/ph11.JPG";
import logo from "../assets/logo.PNG";
import back from "../assets/backround.jpg";
import back2 from "../assets/back2.png";

const Almahaba = () => {
  const sandwiches = [
    { name: "راس بعضمه", img: ph1 },
    { name: "قباوة", img: ph2 },
    { name: "كرشة", img: ph3 },
    { name: "سجقات", img: ph4 },
    { name: "باسماشكات", img: ph5 },
    { name: "مقادم", img: ph6 },
    { name: "نخاعات", img: ph7 },
    { name: "سلطة نخاع", img: ph8 },
    { name: "سلطة راس", img: ph9 },
    { name: "فتة مقادم", img: ph10 },
    { name: "فتة راس", img: ph11 },
  ];

  return (
    <div
      dir="rtl"
      className="font-kufam bg-[#faf4ec] text-[#3b2e23] min-h-screen"
    >
      <header className="bg-gradient-to-r from-[#b88a55] to-[#d9a066] text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center justify-center">
            <img
              className="h-20 rounded-full border-2 border-[#f5e4c3] bg-slate-50"
              src={logo}
              alt="المحبة"
            />
            <h1 className="text-xl md:text-2xl font-bold mr-4 tracking-tight">
              مطعم المحبة
            </h1>
          </div>
        </div>
      </header>

      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="absolute inset-0 bg-[#3b2e23]/60 flex flex-col justify-center items-center text-center text-[#f5e4c3]">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 drop-shadow-lg w-[90%]">
            أشهى المأكولات الشعبية السورية
          </h2>
          <p className="tex-lg md:text-xl my-5">
            تجربة أصيلة من مطبخ المحبة الميداني
          </p>
          <p className="md:text-lg text-[#fff8e7]">
            نخاعات - مقادم - كرشة - باسماشكات
          </p>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <h3 className="md:text-2xl text-xl font-bold text-center text-[#b88a55] mb-8 border-b-2 border-[#d9a066] inline-block">
          قائمة الوجبات
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {sandwiches.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fff8e7] rounded-2xl shadow-md overflow-hidden hover:shadow-[#d9a066]/40 hover:scale-[1.02] transition transform"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-[#b88a55]">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative h-72 bg-cover bg-center mt-10"
        style={{ backgroundImage: `url(${back2})` }}
      >
        <div className="absolute inset-0 bg-[#3b2e23]/60 flex flex-col justify-center items-center text-center text-[#f5e4c3]">
          <img
            className="h-32 rounded-full border-2 border-[#f5e4c3] bg-slate-50"
            src={logo}
            alt="المحبة"
          />
          <p className="text-lg mt-5">ميدان - جزماتية</p>
          <p className="text-lg mt-2">تواصل معنا: 0935096981</p>
        </div>
      </section>

      <footer className="bg-[#b88a55] text-white text-center py-4">
        <p>© 2025 مطعم المحبة - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default Almahaba;
