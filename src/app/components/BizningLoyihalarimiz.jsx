import img1 from "../mockImg/img1.jpg";
import img2 from "../mockImg/img2.jpg";
import img3 from "../mockImg/img3.jpg";
import img4 from "../mockImg/img4.jpg";
import img5 from "../mockImg/img5.jpg";
import img6 from "../mockImg/img6.jpg";

import { useTranslation } from "react-i18next";

function BizningLoyihalarimiz() {
  const { t, i18n } = useTranslation();

  const homeImages = [
    {
      title: t("magic_text"),
      text: t("magic_description"),
      img: img1,
    },
    {
      title: t("garden_text"),
      text: t("garden_description"),
      img: img2,
    },
    {
      title: t("fonon_text"),
      text: t("fonon_description"),
      img: img3,
    },
    {
      title: t("invento_text"),
      text: t("invento_description"),
      img: img4,
    },
    {
      title: t("presidential_school_text"),
      text: t("presidential_school_description"),
      img: img5,
    },
    {
      title: t("boulevard_text"),
      text: t("boulevard_description"),
      img: img6,
    },
  ];

  return (
    <div
      id="bizning-loyihalarimiz"
      className="max-w-[1280px] overflow-hidden mx-auto py-10"
    >
      <h3 className="mb-6 mt-5 md:text-center sm:text-[24px] text-[30px] md:mt-0 text-black font-medium">
        {t("bizning_loyiha")}
      </h3>

      <div className="grid grid-cols-2 gap-8 lg:gap-4 z-50 sm:grid-cols-1 sm:px-4 sm:gap-5">
        {homeImages?.map((value, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className={`relative group overflow-hidden h-[400px] cursor-pointer`}
          >
            <img src={value.img} alt="img" className="h-screen" />
            <div className="absolute z-10 box-border  -bottom-[115px] duration-700 w-full group-hover:bottom-[200px]">
              <h3 className="px-6 text-[26px] text-white mb-6">
                {value.title}
              </h3>
              <p className="px-6 text-white h-[110px] lg:py-3 lg:text-[14px] md:line-clamp-4">
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
