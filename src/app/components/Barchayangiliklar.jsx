import geodezist_users from "../../assets/geodezist_users.jpg";
import gardrop from "../../assets/gardrop.jpg";
import city from "../../assets/city.jpg";
import city1 from "../../assets/city1.jpg";
import { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";

function Barchayangiliklar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (millisekundlarda)
    });
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <div id="yangiliklar" className="bg-[#f7f7f7]">
      <div className="max-w-[1280px] overflow-hidden mx-auto py-10 sm:px-4">
        <h3 className="mb-6 text-[30px] text-black sm:text-[24px] font-medium lg:text-center">
          {t("barcha_yangiliklar")}
        </h3>

        <div className="flex items-center justify-between gap-10 lg:gap-5 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1">
          <div
            data-aos="fade-right"
            className="grid sm:gap-5 grid-cols-2 h-[300px] w-1/2 md:w-full md:grid-cols-2 sm:grid-cols-1"
          >
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              src={geodezist_users}
              alt="prarap"
              className="w-full h-full rounded-l-[30px] md:rounded-none md:w-full md:h-[250px] sm:rounded-[30px]"
            />

            <div className="w-full p-5 md:w-full h-full md:h-[250px] bg-white md:rounded-none rounded-r-[30px] sm:rounded-[30px] xxl:overflow-y-auto">
              <button className="w-3/6 bg-[#363f4e] sm:w-2/5 rounded-[17px] border-[#363f4e] duration-300 ease-in h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">{t("menejr")}</h3>
              <p className="text-xs leading-[18px]">{t("menejr_text")}</p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="grid sm:gap-5 h-[300px] grid-cols-2 sm:grid-cols-1 w-1/2 md:w-full md:grid-cols-2"
          >
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              src={gardrop}
              alt="gardrop"
              className="w-full h-full rounded-l-[30px] md:rounded-none md:w-full md:h-[250px] sm:rounded-[30px]"
            />
            <div className="w-full p-5 md:w-full h-full md:h-[250px] bg-white md:rounded-none rounded-r-[30px] sm:rounded-[30px] xxl:overflow-y-auto">
              <button className="w-3/6 bg-[#363f4e] sm:w-2/5 rounded-[17px] border-[#363f4e] duration-300 ease-in h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">
                {t("tabriknoma")}
              </h3>
              <p className="text-xs leading-[18px]">{t("menejr_text1")}</p>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="flex items-center justify-between gap-10 lg:gap-5 md:grid md:grid-cols-1 mt-20 sm:grid sm:grid-cols-1">
          <div
            data-aos="fade-right"
            className="grid sm:gap-5 h-[300px] grid-cols-2 w-1/2 md:w-full md:grid-cols-2 sm:grid-cols-1"
          >
            <img
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              src={city}
              alt="city"
              className="w-full h-full rounded-l-[30px] md:rounded-none md:w-full md:h-[250px] sm:rounded-[30px]"
            />
            <div className="w-full p-5 md:w-full h-full md:h-[250px] bg-white md:rounded-none rounded-r-[30px] sm:rounded-[30px] xxl:overflow-y-auto">
              <button className="w-3/6 bg-[#363f4e] sm:w-2/5 rounded-[17px] border-[#363f4e] duration-300 ease-in h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">{t("manzil")}</h3>
              <p className="text-xs leading-[18px]">{t("menejr_text2")}</p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="grid sm:gap-5 h-[300px] grid-cols-2 sm:grid-cols-1 w-1/2 md:w-full md:grid-cols-2"
          >
            <img
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="700"
              src={city1}
              alt="city1"
              className="w-full h-full rounded-l-[30px] md:rounded-none md:w-full md:h-[250px] sm:rounded-[30px]"
            />

            <div className="w-full p-5 md:w-full h-full md:h-[250px] bg-white md:rounded-none rounded-r-[30px] sm:rounded-[30px] xxl:overflow-y-auto">
              <button className="w-3/6 bg-[#363f4e] sm:w-2/5 rounded-[17px] border-[#363f4e] duration-300 ease-in h-[26px] border-[2px] hover:bg-white"></button>
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
