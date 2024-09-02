import { homeImages } from "../mock";
import { useTranslation } from "react-i18next";

function BizningLoyihalarimiz() {
  const { t, i18n } = useTranslation();

  return (
    <div className="max-w-[1280px] overflow-hidden mx-auto py-10">
      <h3 className="mb-6 mt-5 md:text-center text-[30px] md:mt-0 text-black font-medium">
        {t("bizning_loyiha")}
      </h3>

      <div className="grid grid-cols-2 gap-8 lg:gap-4 sm:grid-cols-1 sm:px-10 sm:gap-5">
        {homeImages?.map((value, index) => (
          <div data-aos="zoom-in" className="relative" key={index}>
            <img src={value.img} alt="img" />
            <div className="absolute z-10 bottom-10 box-border pb-5 lg:bottom-0">
              <h3 className="px-6 text-[26px] text-white">{value.title}</h3>
              <p className="p-6 text-white lg:py-3 lg:text-[14px] md:line-clamp-3">
                {value.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BizningLoyihalarimiz;
