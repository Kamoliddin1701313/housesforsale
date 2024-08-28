import prarap from "../../assets/prarap.jpg";
import gardrop from "../../assets/gardrop.jpg";
import city from "../../assets/city.jpg";
import city1 from "../../assets/city1.jpg";

function Barchayangiliklar() {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="max-w-[1280px] mx-auto py-20">
        <h3 className="mb-6 text-[30px] text-black font-medium">
          Barcha yangiliklarimiz
        </h3>

        <div className="flex items-center justify-between gap-12">
          <div className="flex w-1/2 h-[285px]">
            <img
              src={prarap}
              alt="prarap"
              className="w-1/2 h-full rounded-l-[30px]"
            />
            <div className="w-1/2 p-5 bg-white rounded-r-[30px]">
              <button className="w-3/6 bg-[#363f4e] rounded-[17px] border-[#363f4e] duration-300 ease-in h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">
                Qurilish loyihasi menejeri kim?
              </h3>
              <p className="text-xs leading-[18px]">
                Discover Invest kompaniyasida qurilish loyihasi bo'yicha bir
                nechta menejerlar mavjud. Bu mutaxassis o'ziga ishonib
                topshirilgan qurilish ob'ektini muvaffaqiyatli amalga oshirish
                uchun mas'uldir. U rejalashtirish bosqichidan va loyiha
                hujjatlarini tasdiqlashdan tortib, ishga tushirishgacha bo'lgan
                butun jarayonni boshqaradi. binoning, va ba'zan ham loyihadan
                keyingi yordamni amalga oshiradi. Eng so'nggi
              </p>
            </div>
          </div>

          <div className="flex w-1/2 h-[285px]">
            <img
              src={gardrop}
              alt="gardrop"
              className="w-1/2 h-full rounded-l-[30px]"
            />
            <div className="w-1/2 p-5 rounded-r-[30px] bg-white">
              <button className="w-3/6 bg-[#363f4e] rounded-[17px] border-[#363f4e] duration-300 ease-in h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">
                Barchani kelayotgan 2024 yil bilan tabriklayman!
              </h3>
              <p className="text-xs leading-[18px]">
                Zallarning murakkab ichki dizayni kvartiraga kirishdan oldin ham
                qulaylik muhitini yaratadi va qulay navigatsiya tizimi sizga
                kerakli qavatga osongina chiqishga yoki hududga chiqishga yordam
                beradi.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-24 justify-between gap-12">
          <div className="flex w-1/2 h-[285px]">
            <img
              src={city}
              alt="city"
              className="w-1/2 h-full rounded-l-[30px]"
            />
            <div className="w-1/2 p-5  rounded-r-[30px] bg-white">
              <button className="w-3/6 bg-[#363f4e] duration-300 ease-in rounded-[17px] border-[#363f4e] h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">Manzil</h3>
              <p className="text-xs leading-[18px]">
                Transport infratuzilmasi shaharning istalgan nuqtasiga osongina
                ko'chib o'tishga imkon beradi: siz faqat kerakli va kerakli
                yo'nalishni tanlashingiz kerak.
              </p>
            </div>
          </div>

          <div className="flex w-1/2 h-[285px]">
            <img
              src={city1}
              alt="city1"
              className="w-1/2 h-full rounded-l-[30px]"
            />
            <div className="w-1/2 p-5 rounded-r-[30px] bg-white">
              <button className="w-3/6 bg-[#363f4e] duration-300 ease-in rounded-[17px] border-[#363f4e] h-[26px] border-[2px] hover:bg-white"></button>
              <h3 className="text-[18px] leading-[22px] my-3">
                Biz sizni Discover Invest ko'p funksiyali ob'ektlari bilan
                tanishtirishda davom etamiz.
              </h3>
              <p className="text-xs leading-[18px]">
                Biz sizlarni 'ATAEV BAHODIR BUILD' kompaniyasining ko'p
                funksiyali ob'ektlari bilan tanishtirishda davom etamiz. Ulardan
                biri Toshkent shahrining Yangixoyat tumanida barpo etilgan
                'Yangi Choshtepa turar-joy majmuasidir. Qurilishning umumiy
                maydoni 12 gektarni tashkil etadi. Shu kungacha 29 ta uy-joy
                qurildi. qurilgan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barchayangiliklar;
