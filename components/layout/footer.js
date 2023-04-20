import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
function Footer({ menu, lang, socialHandler }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (ln) => {
    i18n.changeLanguage(ln);
  };
  const styles = {
    wrapper:
      "flex flex-wrap lg:h-[720px] lg:text-left px-8 text-center lg:px-[120px] bg-[#1A1A1A] text-white",
    menu: "lg:h-[645px] h-[550px] relative w-full flex content-center flex-wrap",
    logoDiv: "w-1/2 lg:w-[50%] mx-auto relative z-10",
    bgImg1:
      "absolute lg:block lg:w-[450px] w-[185px] top-[5px] left-[-5px]  lg:top-[35px] lg:left-[-265px] ",
    bgImg2:
      "absolute lg:block lg:w-[300px] w-[185px]  bottom-[-15px] right-[-25px] lg:bottom-[-35px] lg:right-[-110px] ",
    lang: "w-full lg:w-[25%] my-10 lg:m-0 relative z-10",
    nav: "w-full lg:w-[25%]  relative z-10",
    heading: "lg:text-[20px] font-semibold mb-[15px]",
    link: "block text-[12px] lg:text-[16px] mb-[8px]",
    language:
      "block mb-[8px] font-semibold hover:text-white cursor-pointer lg:w-fit w-full text-[#6E6E6E]",
    copyright:
      "mt-auto flex w-full h-[75px] text-[12px] lg:text-[16px] content-center flex-wrap border-t-2 border-[#3A3A3A]  ",
    mail: " ml-auto w-fit",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <Image
          src="/images/footer-bg1.png"
          width={450}
          height={30}
          className={styles.bgImg1}
        />
        <Image
          src="/images/footer-bg2.png"
          width={300}
          height={305}
          className={styles.bgImg2}
        />
        <div className={styles.logoDiv}>
          <div className="w-fit">
            <Image
              src="/images/logo.svg"
              width={325}
              height={70}
              className={styles.logo}
            />
            <div className="flex  w-fit mx-auto mt-10 gap-[10px]">
              {socialHandler.map((s, index) => (
                <a rel="noreferrer" href={s.link} key={s.id} target="_blank">
                  <Image
                    src={s.img}
                    width={28}
                    height={28}
                    // className={}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.lang}>
          <div className={styles.heading}>{t("Language")}</div>
          {lang.map((m) => (
            <a
              key={m.id}
              onClick={() => changeLanguage(m.text)}
              className={styles.language}
            >
              {t(m.text)}
            </a>
          ))}
        </div>
        <div className={styles.nav}>
          <div className={styles.heading}>{t("Navigation")}</div>
          {menu.map((m) => (
            <a key={m.id} href={m.link} className={styles.link}>
              {t(m.text)}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        {t("all right reserved")}
        <div className={styles.mail}>
          <img src="/images/mail.svg" alt="" />
          <a href="mailto:support@hqtraff.com">support@hqtraff.com</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
