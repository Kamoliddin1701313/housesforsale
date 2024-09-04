import CountUp from "react-countup";
import { useCountUp } from "react-countup";
import React from "react";
import { useTranslation } from "react-i18next";

function AboutOurCampaign() {
  const { t, i18n } = useTranslation();

  return (
    <div className="py-[90px] bg-cover bg-center bg-[url('src/assets/react-countup.png')]">
      <div className="mx-auto max-w-[1280px] sm:overflow-x-auto xxl:px-10">
        <h2 className="text-[25px] font-normal lg:text-center text-white">
          {t("bizning_kompaniya")}
        </h2>
        <div className="w-[54%] xl:w-3/4 flex lg:w-full gap-2 justify-between my-[50px] text-white">
          <div className="w-full">
            <h1 className="text-[45px] lg:text-[36px] sm:text-[28px] font-bold flex gap-3">
              <CountUp start={0} end={120} delay={0} duration={10}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <span>+</span>
            </h1>
            <p className="text-[21px] lg:text-[18px] sm:text-[14px]">
              {t("xodimlarimiz_soni")}
            </p>
          </div>

          <div className="w-full">
            <h1 className="text-[45px] lg:text-[36px] sm:text-[28px] font-bold flex gap-3">
              <CountUp start={0} end={43} delay={0} duration={7}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>

              <span>+</span>
            </h1>

            <p className="text-[21px] lg:text-[18px] sm:text-[14px]">
              {t("obectlar")}
            </p>
          </div>

          <div className="w-full">
            <h1 className="text-[45px] lg:text-[36px] sm:text-[28px] font-bold flex gap-3">
              <CountUp start={0} end={250} delay={0} duration={7}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <span>+</span>
            </h1>
            <p className="text-[21px] lg:text-[18px] sm:text-[14px]">
              {t("maxsus_jihozlar")}
            </p>
          </div>

          <div className="w-full">
            <h1 className="text-[45px] lg:text-[36px] sm:text-[28px] font-bold flex gap-3">
              <CountUp start={0} end={2} delay={0.08} duration={4}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <span>+</span>
            </h1>
            <p className="text-[21px] lg:text-[18px] sm:text-[14px]">
              {t("bozor")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurCampaign;
