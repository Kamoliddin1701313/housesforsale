import { useState } from "react";
import { homeImages } from "../mock";

function BizningLoyihalarimiz() {
  const [hoverEvent, setHoverEvent] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto py-10">
      <h3 className="mb-6 mt-12 text-[30px] text-black font-medium">
        Bizning loyihalarimiz
      </h3>

      <div className="grid grid-cols-2 gap-8">
        {homeImages?.map((value, index) => (
          <div
            className="relative bg-yellow-400"
            key={index}
            onMouseOver={(priv) => setHoverEvent(!priv)}
            // {hoverEvent && (data-aos="fade-up")}
          >
            <img src={value.img} alt="img" />
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              className="absolute z-10 bottom-0"
            >
              <h3 className="px-6 text-[26px] text-white">{value.title}</h3>
              <p className="p-6 text-white">{value.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BizningLoyihalarimiz;
