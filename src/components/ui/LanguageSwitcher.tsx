import { useTranslation } from "react-i18next";

const LanguageSwitcher = ({ textAlign = "left" }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`relative text-white/80 hover:text-white transition-colors duration-300 group text-${textAlign}`}>
      {currentLanguage === "en" ? t("LANG.AR") : t("LANG.EN")}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-brand transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
};

export default LanguageSwitcher;
