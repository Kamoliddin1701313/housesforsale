import AboutOurCampaign from "../components/AboutOurCampaign";
import BackgroundImageWithText from "../components/BackgroundImageWithText";
import Barchayangiliklar from "../components/Barchayangiliklar";
import BizningLoyihalarimiz from "../components/BizningLoyihalarimiz";
import Hamkorlar from "../components/Hamkorlar";
import Home_img from "../components/Home_img";
import Murojat from "../components/Murojat";
import Xizmatlar from "../components/Xizmatlar";

import "aos/dist/aos.css"; // AOS uchun CSS fayl
import AOS from "aos"; // AOS kutubxonasini import qilish
import "aos/dist/aos.css"; // AOS uchun CSS fayl
import { useEffect } from "react";

function LayoutComponents() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      offset: 200,
    });

    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Xizmatlar />
      <AboutOurCampaign />
      <Home_img />
      <BizningLoyihalarimiz />
      <Barchayangiliklar />
      <Hamkorlar />
      <BackgroundImageWithText />
      <Murojat />
    </div>
  );
}

export default LayoutComponents;
