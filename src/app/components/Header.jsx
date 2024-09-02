import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="wrap xxl:bg-center h-[700px]">
      <div className="max-w-[1280px] pt-24 mx-auto">
        <div className="text-[5.35rem] md:text-[32px] md:mt-[120px] lg:text-center md:leading-[50px] leading-[120px] xxl:mx-[50px] xxl:text-[52px] xxl:leading-[70px] mt-16 font-bold text-white">
          <h1>{t("familiya")}</h1>
          <h1>{t("ism")}</h1>
        </div>
        <p className="text-[18px] xxl:mx-[50px] lg:text-center text-white mt-10">
          {t("text")}
        </p>
        <div className="flex gap-5 xxl:mx-[50px] md:flex lg:justify-center items-center mt-14 text-white pb-10">
          <Link to={"/bizningLoyihalarimiz"}>
            <button className="rounded-[22px] w-[130px] outline-[5px] outline-white border-[2px] hover:bg-white hover:text-gray-600 duration-500 ease-in py-2">
              {t("btn-content")}
            </button>
          </Link>

          <button className="rounded-[22px] w-[130px] outline-[5px] outline-white border-[2px] hover:bg-white hover:text-gray-600 duration-500 ease-in py-2">
            {t("btn-boglanish")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
