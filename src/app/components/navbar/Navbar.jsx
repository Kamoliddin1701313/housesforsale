import "./navbar.css";

function Navbar() {
  return (
    <header className=" wrap">
      <div className="max-w-[1280px] mx-auto">
        <nav className="z-999 sticky top-0">
          <ul className="flex justify-between text-[20px] items-center py-5 px-10 font-semibold capitalize text-white relative">
            <li>
              <a href="#">information</a>
            </li>

            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">Enterprises</a>
            </li>

            <li>
              <a href="#">
                <img
                  src="src/assets/text_img.png"
                  alt="text_img"
                  className="w-[120px]"
                />
              </a>
            </li>

            <li>
              <a href="#">Our advantages</a>
            </li>

            <li>
              <a href="#">News</a>
            </li>

            <li>
              <a href="#">Communication</a>
            </li>
          </ul>
        </nav>

        <div className="text-[5.35rem] font-bold text-white">
          <h1 className="leading-[160px]">ATAEV</h1>
          <h1 className="leading-[160px]">BAHODIR BUILD</h1>
        </div>
        <p className="text-[18px] text-white mt-10">Hamma narsada a'lo</p>
        <div className="flex gap-5 items-center mt-10 text-white pb-10">
          <button className="rounded-[22px] w-[130px] outline-[5px] outline-white border-[2px] hover:bg-white hover:text-gray-600 duration-500 ease-in py-2">
            Bizning loyihamiz
          </button>
          <button className="rounded-[22px] w-[130px] outline-[5px] outline-white border-[2px] hover:bg-white hover:text-gray-600 duration-500 ease-in py-2">
            Bog'lanish
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
