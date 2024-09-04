import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import usersImg from "../../assets/usersImg.jpg";
import { useTranslation } from "react-i18next";

const AtayevBahodirHaqida = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`mx-auto max-w-[1280px] mt-28 xxl:p-10`}>
      <h1 className="text-[#222936] text-[32px] md:text-center">
        {t("at_bah_haqida")}
      </h1>
      <Link to="/">
        <div className="flex items-center md:justify-center my-5 md:my-7">
          <span className="text-gray-white text-[16px] leading-[19px]">
            {t("bosh_btn")}
          </span>
          <MdOutlineNavigateNext className="text-[22px]" />
        </div>
      </Link>
      <div className="flex justify-between md:flex-col-reverse gap-10 mb-28 md:mb-6 md:gap-4">
        <p className="text-[#464646] md:text-center md:mx-auto md:w-4/5 mt-4 w-1/3 font-fontMulish font-medium text-[16px] leading-6">
          {t("sarlavha_text")}
        </p>
        <img
          src={usersImg}
          alt="usersImg"
          className="w-[45%] md:w-4/5 rounded-[10px] md:mx-auto"
        />
      </div>
    </div>
  );
};

export default AtayevBahodirHaqida;
