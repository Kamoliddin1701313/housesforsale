import { useEffect } from "react";
import AOS from "aos"; // AOS kutubxonasini import qilish
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function BackgroundImageWithText() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (millisekundlarda)
    });
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <div className="py-[90px] mt-10 xxl:mt-0 h-[700px] overflow-hidden bg-cover bg-center bg-[url('src/assets/user_backround.jpg')]">
      <div className="mx-auto max-w-[1280px] text-white px-10 md:text-center">
        <h2 className="text-[24px]">{t("username")}</h2>
        <h1
          data-aos="fade-up"
          className="text-[40px] leading-[120%] mt-12 md:mt-4"
        >
          {t("atayev_bahodir")}
        </h1>
        <h1 data-aos="fade-up" className="text-[40px] leading-[120%]">
          {t("build")}
        </h1>
        <p
          data-aos="fade-up"
          className="mt-[50px] w-[400px] leading-[25px] md:text-center md:mx-auto"
        >
          {t("content")}
        </p>
        <div className="flex gap-5 items-center mt-24 text-white pb-10 md:justify-center">
          <Link to={"/atayevBahodirHaqida"}>
            <button className="rounded-[22px] w-[130px] outline-[5px] outline-white border-[2px] hover:bg-white hover:text-gray-600 duration-500 ease-in py-2">
              {t("batafsil-bilish")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImageWithText;
