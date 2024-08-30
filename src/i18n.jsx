import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import uzTranslation from "../public/locales/uz.json";
import ruTranslation from "../public/locales/ru.json";
import enTranslation from "../public/locales/en.json";

const laungage = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  .use(languageDetector) //tilni aniqlab berish
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: laungage,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
  });
export default i18n;
