import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import girlImg from "../../assets/girl-img.png";
function Murojat() {
  const { t, i18n } = useTranslation();

  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    event.preventDefault();
    const token = "7347565278:AAEFudCBSf9fgd7ZVO8flm2qKGZa9R5hGYE";
    const chat_id = 6399996460;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const phone_number = document.getElementById("phone_number");
    const messageContent = `Ism : ${name} \n PhoneNumber : ${phone_number}`;
    console.log(name);
    console.log(phone_number);

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        document.getElementById("send").reset();
        setLoading(true);
        alert("Muvaffaqiyotli yuborildi ...");
      })
      .catch((err) => {
        console.log("Yuborishda xatolik yuz berdi ", err);
      });
  };

  return (
    <div className="bg-slate-900 py-28 sm:px-4 overflow-hidden">
      <div
        style={{ backgroundImage: `url(${girlImg})` }}
        className="h-[700px] mx-auto max-w-[1280px] md:bg-right bg-cover w-4/5 sm:w-full rounded-[40px] py-10 px-20 sm:px-5"
      >
        <form
          onSubmit={SendMessage}
          id="send"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="md:w-full"
        >
          <h2
            data-aos="fade-right"
            className="text-[32px] text-white md:text-center"
          >
            {t("xabar-text")}
          </h2>

          <h2
            data-aos="fade-left"
            className="text-[32px] text-white md:text-center"
          >
            {t("xabar-text1")}
          </h2>

          <input
            id="name"
            type="text"
            required
            className="w-1/2 md:w-full block border-none outline-none bg-[#d9d9d9] py-[15px] px-5 mt-14 rounded-[20px]"
            placeholder="Ismingiz"
          />

          <input
            id="phone_number"
            type="tel"
            required
            maxLength={13}
            className="w-1/2 md:w-full block border-none outline-none bg-[#d9d9d9] py-[15px] px-5 my-5 rounded-[20px]"
            placeholder="Telefon raqamingiz"
          />

          <textarea
            id="textarea"
            required
            className="w-1/2 md:w-full resize-none border-none outline-none bg-[#d9d9d9] block py-[15px] px-5 my-5 rounded-[20px]"
            placeholder="Sizning xabaringiz..."
            rows="7"
          ></textarea>

          <button
            type="submit"
            className="mt-[30px] md:w-full duration-300 ease-in hover:bg-transparent border-2 text-base text-white rounded-[35px] w-[231px] h-[45px] bg-slate-500 border-[#8ea9c9d0]"
          >
            {loading ? t("yuborildi-btn") : t("yuborish-btn")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Murojat;
