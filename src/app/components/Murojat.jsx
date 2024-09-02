function Murojat() {
  return (
    <div className="bg-slate-900 py-28 overflow-hidden">
      <div className="bg-[url('src/assets/girl-img.png')] h-[700px] mx-auto max-w-[1280px] md:bg-right bg-cover w-4/5 rounded-[40px] py-10 px-20 sm:px-10">
        <form
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="md:w-full"
        >
          <h2
            data-aos="fade-right"
            className="text-[32px] text-white md:text-center"
          >
            Savol, taklif va
          </h2>
          <h2
            data-aos="fade-left"
            className="text-[32px] text-white md:text-center"
          >
            murojaatlar bormi?
          </h2>
          <input
            type="text"
            required
            className="w-1/2 md:w-full block border-none outline-none bg-[#d9d9d9] py-[15px] px-5 mt-14 rounded-[20px]"
            placeholder="Ismingiz"
          />
          <input
            type="tel"
            required
            maxLength={14}
            className="w-1/2 md:w-full block border-none outline-none bg-[#d9d9d9] py-[15px] px-5 my-5 rounded-[20px]"
            placeholder="Telefon raqamingiz"
          />
          <textarea
            className="w-1/2 md:w-full resize-none border-none outline-none bg-[#d9d9d9] block py-[15px] px-5 my-5 rounded-[20px]"
            placeholder="Sizning xabaringiz..."
            rows="7"
          ></textarea>

          <button className="mt-[30px] md:w-full duration-300 ease-in hover:bg-transparent border-2 text-base text-white rounded-[35px] w-[231px] h-[45px] bg-slate-500 border-[#8ea9c9d0]">
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Murojat;
