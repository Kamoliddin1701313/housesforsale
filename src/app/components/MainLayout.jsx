import AboutOurCampaign from "./AboutOurCampaign";
import BackgroundImageWithText from "./BackgroundImageWithText";
import Barchayangiliklar from "./Barchayangiliklar";
import BizningLoyihalarimiz from "./BizningLoyihalarimiz";
import Hamkorlar from "./Hamkorlar";
import Header from "./Header";
import Home_img from "./Home_img";
import Murojat from "./Murojat";
import Xizmatlar from "./Xizmatlar";

const MainLayout = () => {
  return (
    <div>
      <Header />
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
};

export default MainLayout;
