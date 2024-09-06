import prarap from "../../assets/prarap.jpg";
import gardrop from "../../assets/gardrop.jpg";
import city from "../../assets/city.jpg";
import city1 from "../../assets/city1.jpg";
import { useEffect, useTransition } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";

function Barchayangiliklar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (millisekundlarda)
    });
  }, []);

  const { t, i18n } = useTranslation();
  //bg-[#f7f7f7]
  return (
    <div id="yangiliklar">
      <div className="max-w-[1280px] overflow-hidden mx-auto py-20 lg:py-10 sm:px-10">
        <h3 className="mb-6 text-[30px] text-black font-medium lg:text-center">
          {t("barcha_yangiliklar")}
        </h3>

        <div className="flex items-center justify-between gap-12 lg:gap-5 sm:grid-cols-1 sm:grid">
          <div data-aos="fade-right" className="flex w-1/2 h-[285px] sm:w-full">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              src={prarap}
              alt="prarap"
              className="w-1/2 h-full rounded-l-[30px]"
            />
            <div className="w-1/2 p-5 bg-white rounded-r-[30px] xxl:overflow-y-auto">
              <button className="w-3/6 bg-[#363f4e] rounded-[17px] border-[#363f4e] duration-300 ease-in h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">{t("menejr")}</h3>
              <p className="text-xs leading-[18px]">{t("menejr_text")}</p>
            </div>
          </div>

          <div data-aos="fade-left" className="flex w-1/2 h-[285px] sm:w-full">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              src={gardrop}
              alt="gardrop"
              className="w-1/2 h-full rounded-l-[30px]"
            />
            <div className="w-1/2 p-5 rounded-r-[30px] bg-white xxl:overflow-y-auto">
              <button className="w-3/6 bg-[#363f4e] rounded-[17px] border-[#363f4e] duration-300 ease-in h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">
                {t("tabriknoma")}
              </h3>
              <p className="text-xs leading-[18px]">{t("menejr_text1")}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-24 lg:mt-10 justify-between gap-12 lg:gap-5 sm:grid-cols-1 sm:grid">
          <div data-aos="fade-right" className="flex w-1/2 h-[285px] sm:w-full">
            <img
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              src={city}
              alt="city"
              className="w-1/2 h-full rounded-l-[30px]"
            />
            <div className="w-1/2 p-5  rounded-r-[30px] bg-white xxl:overflow-y-auto">
              <button className="w-3/6 bg-[#363f4e] duration-300 ease-in rounded-[17px] border-[#363f4e] h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">{t("manzil")}</h3>
              <p className="text-xs leading-[18px]">{t("menejr_text2")}</p>
            </div>
          </div>

          <div data-aos="fade-left" className="flex w-1/2 h-[285px] sm:w-full">
            <img
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              src={city1}
              alt="city1"
              className="w-1/2 h-full rounded-l-[30px]"
            />

            <div className="w-1/2 p-5 rounded-r-[30px] bg-white xxl:overflow-y-auto">
              <button className="w-3/6 bg-[#363f4e] duration-300 ease-in rounded-[17px] border-[#363f4e] h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">
                {t("sarlavxa")}
              </h3>
              <p className="text-xs leading-[18px]">{t("sarlavxa_matini")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barchayangiliklar;
