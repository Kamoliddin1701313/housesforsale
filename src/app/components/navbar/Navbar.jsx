import { useState } from "react";
import "./navbar.css";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [open, setOpen] = useState(false);

  const laungage = localStorage.getItem("i18nextLng");

  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };

  return (
    <header className="wrap xxl:bg-center h-full xl:bg-top">
      <div className="max-w-[1280px] mx-auto">
        <nav className="z-999 sticky top-0 md:flex items-center md:p-5 justify-between">
          <ul className="hidden md:block">
            <li>
              <a href="#">
                <img
                  src="src/assets/text_img.png"
                  alt="text_img"
                  className="w-[120px] lg:w-[100px]"
                />
              </a>
            </li>
          </ul>

          <ul
            className="flex justify-between 
          md:gap-y-8 md:absolute md:bg-gray-500 
          md:top-[99px] md:grid xl:text-[16px] 
          text-[20px] items-center py-5 lg:px-4 px-10 
          font-semibold capitalize text-white relative md:-left-[150px]"
          >
            <li>
              <a href="#">{t("malumot")}</a>
            </li>

            <li>
              <a href="#">{t("biz-haqimizda")}</a>
            </li>

            <li>
              <a href="#">{t("korxonalar")}</a>
            </li>

            <li>
              <a href="#">
                <img
                  src="src/assets/text_img.png"
                  alt="text_img"
                  className="w-[120px] xl:w-[100px] lg:w-[80px] md:hidden"
                />
              </a>
            </li>

            <li>
              <a href="#">{t("afzaliklar")}</a>
            </li>

            <li>
              <a href="#">{t("yangiliklar")}</a>
            </li>

            <li>
              <a href="#">{t("aloqa")}</a>
            </li>

            <div className="flex text-[18px] md:hidden xl:text-[14px] items-center relative group">
              <span className="cursor-pointer px-[20px]">UZ</span>
              <select
                onChange={handleChange}
                value={laungage}
                className="opacity-0 absolute top-8 transition-opacity px-3 duration-700 ease-in  group-hover:opacity-100 bg-black rounded-[12px] shadow-lg"
              >
                <option value="uz" className="p-2 cursor-pointer">
                  UZ
                </option>
                <option value="en" className="p-2 cursor-pointer">
                  EN
                </option>
                <option value="ru" className="p-2 cursor-pointer">
                  RU
                </option>
              </select>
            </div>
          </ul>

          <div className="flex items-center gap-5">
            <div className="text-[18px] text-white hidden md:block items-center relative group">
              <span className="cursor-pointer px-[20px]">UZ</span>
              <select
                onChange={handleChange}
                value={laungage}
                className="opacity-0 absolute top-8 transition-opacity px-3 duration-700 ease-in  group-hover:opacity-100 bg-black rounded-[12px] shadow-lg"
              >
                <option value="uz" className="p-2 cursor-pointer">
                  UZ
                </option>
                <option value="en" className="p-2 cursor-pointer">
                  EN
                </option>
                <option value="ru" className="p-2 cursor-pointer">
                  RU
                </option>
              </select>
            </div>
            <IoClose
              onClick={() => setOpen(!open)}
              className="text-[30px] hidden md:block cursor-pointer text-red-700"
            />
          </div>
        </nav>

        <div className="text-[5.35rem] md:text-[32px] md:mt-[120px] lg:text-center md:leading-[50px] leading-[120px] xxl:mx-[50px] xxl:text-[52px] xxl:leading-[70px] mt-16 font-bold text-white">
          <h1>{t("familiya")}</h1>
          <h1>{t("ism")}</h1>
        </div>
        <p className="text-[18px] xxl:mx-[50px] lg:text-center text-white mt-10">
          {t("text")}
        </p>
        <div className="flex gap-5 xxl:mx-[50px] md:flex lg:justify-center items-center mt-10 text-white pb-10">
          <button className="rounded-[22px] w-[130px] outline-[5px] outline-white border-[2px] hover:bg-white hover:text-gray-600 duration-500 ease-in py-2">
            {t("btn-content")}
          </button>
          <button className="rounded-[22px] w-[130px] outline-[5px] outline-white border-[2px] hover:bg-white hover:text-gray-600 duration-500 ease-in py-2">
            {t("btn-boglanish")}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
