import React from "react";
import background from "../assets/food.png";
import ph2 from "../assets/ph2.jpeg";
import ph3 from "../assets/ph3.jpeg";
import ph7 from "../assets/ph7.jpeg";
import ph8 from "../assets/ph8.jpeg";
import ph9 from "../assets/ph9.jpeg";
import ph10 from "../assets/ph10.jpeg";
import ph11 from "../assets/ph11.jpeg";
import ph12 from "../assets/ph12.jpeg";
import ph13 from "../assets/ph13.jpeg";
import ph14 from "../assets/ph14.jpeg";
import ph15 from "../assets/ph15.jpeg";
import ph16 from "../assets/ph16.jpeg";
import ph17 from "../assets/ph17.jpeg";
import ph20 from "../assets/ph20.jpeg";
import ph23 from "../assets/ph23.jpeg";
import ph24 from "../assets/ph24.jpeg";
import ph25 from "../assets/ph25.jpeg";
import ph26 from "../assets/ph26.png";
import ph27 from "../assets/ph27.jpeg";
import logo from "../assets/logo.png";

const Falafilgy = () => {
  const sandwiches = [
    { name: "صحن بطاطا تشيز", img: ph14 },
    { name: "صحن بطاطا كبير", img: ph15 },
    { name: "فلافل صمون مع قشقوان", img: ph12 },
    { name: "بطاطا مع قشقوان", img: ph10 },
    { name: "بطاطا مع قشقووان", img: ph11 },
    { name: "كوردن بلو", img: ph13 },
    { name: "شيش", img: ph8 },
    { name: "سوبريم", img: ph7 },
    { name: "زنجر", img: ph9 },
    { name: "كريسبي", img: ph25 },
    { name: "بطاطا كشف", img: ph3 },
    { name: "بطاطا صمون", img: ph20 },
    { name: "فلافل صمون", img: ph2 },
    { name: "فلافل صاج", img: ph24 },
    { name: "فلافل سياحي", img: ph23 },
    { name: "ميكس فلافل و بطاطا", img: ph26 },
    { name: "فلافل صمون اكسترا", img: ph27 },
    { name: "وجبات فلفلجي", img: ph16 },
    { name: "فلافل عربي", img: ph17 },
  ];

  return (
    <div dir="rtl" className="font-sans bg-orange-50 min-h-screen">
      <header className="bg-orange-200 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center justify-center">
            <img className="h-20" src={logo} alt="فلفلجي" />
            <h1 className="text-2xl font-bold mr-5">فلفلجي</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 space-x-reverse">
              <li className="hover:text-orange-200 cursor-pointer">
                مطعم عربي - غربي
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative h-72 bg-cover bg-center">
        <img className="absolute h-72 w-full" src={background} alt="" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            أشهى المأكولات العربية و الغربية
          </h2>
          <p className="text-lg">تعرف على قائمة السندويشات لدينا</p>
        </div>
      </section>

      <section className="container mx-auto py-10 px-4">
        <h3 className="md:text-3xl text-2xl font-bold text-center text-yellow-500 mb-8">
          قائمة السندويشات
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sandwiches.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-80 bg-cover bg-center mt-10">
        <img className="absolute h-80 w-full" src={background} alt="" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
          <img className="h-28" src={logo} alt="فلفلجي" />
          <p className="text-lg mt-5"> فرع 1 مهاجرين - سكة</p>
          <p className="text-lg mt-2"> فرع 2 شارع الثورة - دخلة ساروجة</p>
          <p className="text-lg mt-2"> فرع 3 ضاحية - السوق التجاري</p>
          <p className="text-lg mt-2"> تواصل - 0944454476</p>
        </div>
      </section>

      <footer className="bg-yellow-500 text-white text-center py-4">
        <p>© 2025 فلفلجي - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

export default Falafilgy;
