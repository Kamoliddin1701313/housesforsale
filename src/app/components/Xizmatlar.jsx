import { useEffect } from "react";

import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import AOS from "aos"; // AOS kutubxonasini import qilish
import { useTranslation } from "react-i18next";

function Xizmatlar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (millisekundlarda)
    });
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#fce8bd] overflow-hidden">
      <div className="max-w-[1280px] mx-auto py-16 xxl:px-5 sm:px-4 sm:py-5">
        <h3 className="text-center mb-10 text-[30px] sm:m-5 text-black font-medium">
          {t("biz_xizmatlarimiz")}
        </h3>
        <div className="grid grid-cols-1 gap-7 md:gap-4">
          <div className="flex gap-7 md:gap-4 justify-between sm:grid-cols-1 sm:grid">
            <div
              data-aos="fade-right"
              className="flex justify-between sm:w-full w-[55%] bg-[#2c3442] h-[220px] lg:h-[180px] rounded-[15px]"
            >
              <p className="self-end p-8 lg:p-4 text-[20px] text-white xl:text-[16px]">
                {t("bizdagi_xizmatlar")}
              </p>
              <img src={logo} alt="logo" className="w-2/5 self-end h-full" />
            </div>

            <div
              data-aos="fade-left"
              className="flex justify-between sm:w-full w-[45%] bg-[#2c3442] h-[220px] lg:h-[180px] rounded-[15px]"
            >
              <p className="self-end p-8 lg:p-4 text-[20px] text-white xl:text-[16px]">
                {t("hujjatlar_rasmiylashtirish")}
              </p>
              <img src={logo1} alt="logo1" className="w-2/5 self-end h-full" />
            </div>
          </div>

          <div className="flex gap-7 md:gap-4 sm:grid-cols-1 sm:grid">
            <div
              data-aos="fade-right"
              className="flex justify-between sm:w-full w-[45%] bg-[#2c3442] h-[220px] lg:h-[180px] rounded-[15px]"
            >
              <p className="self-end p-8 lg:p-4 text-[20px] text-white xl:text-[16px]">
                {t("tamirlash_xizmati")}
              </p>
              <img src={logo3} alt="logo3" className="w-2/5 self-end h-full" />
            </div>

            <div
              data-aos="fade-left"
              className="flex justify-between sm:w-full w-[55%] bg-[#2c3442] h-[220px] lg:h-[180px] rounded-[15px]"
            >
              <p className="self-end p-8 lg:p-4 text-[20px] text-white xl:text-[16px]">
                {t("jamo")}
              </p>
              <img src={logo2} alt="logo2" className="w-2/5 self-end h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xizmatlar;
