import { hamkorlar } from "../mock";
import { useTranslation } from "react-i18next";

function Hamkorlar() {
  const { t, i18n } = useTranslation();

  return (
    <div className="mx-auto">
      <h3 className="text-center mb-6 mt-10 text-[30px] text-black font-medium">
        {t("hamkorlar")}
      </h3>
      <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:px-[40px]">
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
