// import { hamkorlar } from "../mock";
import { useTranslation } from "react-i18next";
import { hamkorlar } from "../mock";

function Hamkorlar() {
  const { t, i18n } = useTranslation();
  console.log(hamkorlar, "salom img");

  return (
    <div className="mx-auto overflow-hidden sm:px-4">
      <h3 className="text-center mb-6 mt-10 sm:text-[24px] text-[30px] text-black font-medium">
        {t("hamkorlar")}
      </h3>
      <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1">
        {hamkorlar?.map((value, index) => (
          <div key={index} className="sm:mt-5">
            <img src={value.img} className="h-[380px] w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hamkorlar;
