import {useTranslation} from "react-i18next";

const Language = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  
  console.log(t("welcome"))


  return <div>
    <h1>语言切换</h1>
    <button onClick={() => changeLanguage("zh")}>简体中文</button>
    <button onClick={() => changeLanguage("en")}>English</button>
    <div>{t("welcome")}</div>
  </div>
}

export default Language;