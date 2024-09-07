import { useEffect, useState } from "react";
import "./navbar.css";
import { IoClose } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import text_img from "../../../assets/text_img.png";
import footer_logo from "../../../assets/footer_logo_img.png";
import { useTranslation } from "react-i18next";
import { style } from "../../styleses";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const laungage = localStorage.getItem("i18nextLng");

  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        className={`z-50 fixed top-0 w-full transition-all duration-300 ${
          isScrolled ? "bg-[#fce8bd]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1280px] relative mx-auto md:flex items-center justify-between">
          <div className="hidden md:block w-full relative bg-gray-700 h-14 py-12 sm:px-14">
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
            className={`md:absolute md:w-[250px] md:bg-gray-700 py-4 px-10 lg:px-1 md:grid md:grid-cols-1 md:left-0 md:top-[96px] flex md:gap-y-10 md:p-8 justify-between items-center font-semibold lg:text-[16px] capitalize text-white text-[20px] ${
              open ? "md:block" : "md:hidden"
            }`}
          >
            <li className={`${isScrolled ? "text-black" : "text-white"}`}>
              <a href="/">{t("malumot")}</a>
            </li>

            <li className={`${isScrolled ? "text-black" : "text-white"}`}>
              <a href="#biz-haqimizda">{t("biz-haqimizda")}</a>
            </li>

            <li className={`${isScrolled ? "text-black" : "text-white"}`}>
              <a href="#korxonalar">{t("korxonalar")}</a>
            </li>

            <li
              className={`md:hidden ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <a href="#">
                <img
                  src={`${isScrolled ? footer_logo : text_img}`}
                  alt="text_img"
                  className="w-[120px] xl:w-[100px] lg:w-[80px]"
                />
              </a>
            </li>

            <li className={`${isScrolled ? "text-black" : "text-white"}`}>
              <a href="#bizning-loyihalarimiz">{t("afzaliklar")}</a>
            </li>

            <li className={`${isScrolled ? "text-black" : "text-white"}`}>
              <a href="#yangiliklar">{t("yangiliklar")}</a>
            </li>

            <li className={`${isScrolled ? "text-black" : "text-white"}`}>
              <a href="#">{t("aloqa")}</a>
            </li>

            <select
              className={`bg-transparent outline-none md:mx-auto md:w-1/4 relative ${
                isScrolled ? "text-black" : "text-white"
              }`}
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
