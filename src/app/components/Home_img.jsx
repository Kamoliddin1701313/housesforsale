import home from "../../assets/home.jpg";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import home4 from "../../assets/home4.jpg";
import home5 from "../../assets/home5.jpg";
import { useTranslation } from "react-i18next";

function Home_img() {
  const { t, i18n } = useTranslation();

  return (
    <div className="mx-auto">
      <h3 className="text-center my-6 text-[30px] text-black font-medium">
        {t("sizning_uyingiz")}
      </h3>
      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:px-10 sm:gap-y-5">
        <img src={home} alt="home" className="h-[380px] w-full" />
        <img src={home1} alt="home1" className="h-[380px] w-full" />
        <img src={home2} alt="home2" className="h-[380px] w-full" />
        <img src={home3} alt="home3" className="h-[380px] w-full" />
        <img src={home4} alt="home4" className="h-[380px] w-full" />
        <img src={home5} alt="home5" className="h-[380px] w-full" />
      </div>
    </div>
  );
}

export default Home_img;
