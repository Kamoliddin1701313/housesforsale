import { useEffect } from "react";

import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import AOS from "aos"; // AOS kutubxonasini import qilish

function Xizmatlar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (millisekundlarda)
    });
  }, []);

  return (
    <div className="bg-[#fce8bd]">
      <div className="max-w-[1280px] mx-auto py-16">
        <h3 className="text-center mb-10 text-[30px] text-black font-medium">
          Bizning xizmatlarimiz
        </h3>
        <div className="grid grid-cols-1 gap-7">
          <div className="flex gap-7">
            <div
              data-aos="fade-right"
              className="flex justify-between w-[55%] bg-[#2c3442] rounded-[15px]"
            >
              <p className="self-end p-8 text-[20px] text-white">
                Siz kompaniyamiz mutaxassislaridan bepul ma'lumot olishingiz
                mumkin
              </p>
              <img src={logo} alt="logo" />
            </div>

            <div
              data-aos="fade-left"
              className="flex justify-between w-[45%] bg-[#2c3442] rounded-[15px] box-border"
            >
              <p className="self-end p-8 text-[20px] text-white">
                Hujjatlarni rasmiylashtirish
              </p>
              <img src={logo1} alt="logo1" />
            </div>
          </div>

          <div className="flex gap-7 flex-row-reverse">
            <div
              data-aos="fade-left"
              className="flex justify-between w-[55%] bg-[#2c3442] rounded-[15px]"
            >
              <p className="self-end p-8 text-[20px] text-white">
                Ta`mirlash tuzatish xizmat
              </p>
              <img src={logo3} alt="logo3" />
            </div>

            <div
              data-aos="fade-right"
              className="flex justify-between w-[45%] bg-[#2c3442] rounded-[15px] box-border"
            >
              <p className="self-end p-8 text-[20px] text-white">
                Professionallar jamoasi
              </p>
              <img src={logo2} alt="logo2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xizmatlar;
