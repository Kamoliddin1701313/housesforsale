import footer_logo from "./footer_logo.png";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#fce8bd] top-0">
      <div className="mx-auto max-w-[1280px] md:grid-cols-1 md:grid flex py-[70px] justify-between px-10">
        <div className="flex-1">
          <img
            src={footer_logo}
            alt="footer_logo"
            className="w-[120px] h-[71px]"
          />
          <p className="my-[22px] md:my-[12px] text-[22px]">
            {t("tooter_title")}
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/kamol76021313"
              target="_blank"
              className="p-[25px] bg-black rounded-full self-center md:p-4"
            >
              <FaInstagram className="text-white rounded-full text-[20px]" />
            </a>

            <a
              href="#"
              className="p-[25px] bg-black rounded-full self-center md:p-4"
            >
              <BiLogoFacebook className="bg-white rounded-full text-[20px]" />
            </a>
          </div>
        </div>

        <div className="flex justify-between flex-1 sm:grid-cols-1 sm:grid">
          <div>
            <p className="my-[22px] text-[22px] font-bold">Kompaniyamiz</p>
            <ul className="flex flex-col gap-y-[18px] md:gap-y-[10px] text-[22px] text-stone-600 relative">
              <li className="flex justify-start">
                <a
                  href="#"
                  className="before:content-[''] before:w-0 hover:before:w-full before:bg-stone-600 before:h-[3px] before:absolute before:-bottom-1"
                >
                  Korxonalar
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  href="#"
                  className="before:content-[''] before:w-0 hover:before:w-full before:bg-stone-600 before:h-[3px] before:absolute before:-bottom-1"
                >
                  Biz haqimizda
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  href="#"
                  className="before:content-[''] before:w-0 hover:before:w-full before:bg-stone-600 before:h-[3px] before:absolute before:-bottom-1"
                >
                  Yangiliklar
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  href="#"
                  className="before:content-[''] before:w-0 hover:before:w-full before:bg-stone-600 before:h-[3px] before:absolute before:-bottom-1"
                >
                  Bizning loyihalarimiz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="my-[22px] text-[22px] font-bold">Aloqa</p>
            <ul className="flex flex-col gap-y-[18px] md:gap-y-[10px] text-[22px] text-stone-600 relative">
              <li className="flex justify-start">
                <a
                  href="tel:+998974839999"
                  className="before:content-[''] before:w-0 hover:before:w-full before:bg-stone-600 before:h-[3px] before:absolute before:-bottom-1"
                >
                  +998974839999
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  href="tel:+998997126666"
                  className="before:content-[''] before:w-0 hover:before:w-full before:bg-stone-600 before:h-[3px] before:absolute before:-bottom-1"
                >
                  +998997126666
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
