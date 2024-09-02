import { useState } from "react";
import "./navbar.css";
import { IoClose } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";

import { useTranslation } from "react-i18next";
import { style } from "../../styleses";

function Navbar() {
  const [open, setOpen] = useState(false);

  const laungage = localStorage.getItem("i18nextLng");

  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };
  return (
    <header>
      <div className="z-[999] fixed bg-gray-600 top-0 w-full">
        <nav className="max-w-[1280px] relative mx-auto md:flex items-center md:p-5 py-4 justify-between">
          <div className="hidden md:block w-full relative h-14">
            <ul>
              <li className="-translate-y-1/2 absolute left-1 top-1/2">
                <a href="#">
                  <img
                    src="src/assets/text_img.png"
                    alt="text_img"
                    className="w-[120px] lg:w-[100px]"
                  />
                </a>
              </li>
            </ul>
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <IoClose className="text-[36px] cursor-pointer -translate-y-1/2 absolute right-1 top-1/2 text-red-700" />
              ) : (
                <HiOutlineBars3 className="text-[36px] cursor-pointer -translate-y-1/2 absolute right-1 top-1/2 text-white" />
              )}
            </div>
          </div>

          <ul
            className={`md:absolute bg-gray-600 md:w-[250px] md:grid md:grid-cols-1 md:left-0 md:top-[96px] flex md:gap-y-10 md:p-8 justify-between items-center font-semibold lg:text-[16px] capitalize text-white text-[20px] ${
              open ? "md:block" : "md:hidden"
            }`}
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

            <li className="md:hidden">
              <a href="#">
                <img
                  src="src/assets/text_img.png"
                  alt="text_img"
                  className="w-[120px] xl:w-[100px] lg:w-[80px]"
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

            <select
              className="bg-transparent outline-none md:mx-auto md:w-1/4 relative"
              onChange={handleChange}
              value={laungage}
            >
              <option value="uz" className="text-black">
                UZ
              </option>
              <option value="ru" className="text-black">
                RU
              </option>
              <option value="en" className="text-black">
                EN
              </option>
            </select>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
