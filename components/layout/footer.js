import React from "react";
import Image from "next/image";
function Footer({ menu, lang }) {
  const styles = {
    wrapper: "flex flex-wrap h-[720px  lg:px-[120px] bg-[#1A1A1A] text-white",
    menu: "h-[645px] relative w-full flex content-center flex-wrap",
    logoDiv: "w-[50%] relative z-10",
    bgImg1: "absolute top-[35px] left-[-265px] ",
    bgImg2: "absolute bottom-[-35px] right-[-110px] ",
    lang: "w-[25%] relative z-10",
    nav: "w-[25%] relative z-10",
    heading: "text-[20px] font-semibold mb-[15px]",
    link: "block mb-[8px]",
    language:
      "block mb-[8px] font-semibold hover:text-white cursor-pointer w-fit text-[#6E6E6E]",
    copyright:
      "mt-auto flex w-full h-[75px] content-center flex-wrap border-t-2 border-[#3A3A3A]  ",
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
          <Image
            src="/images/logo.svg"
            width={325}
            height={70}
            className={styles.logo}
          />
        </div>
        <div className={styles.lang}>
          <div className={styles.heading}>Language</div>
          {lang.map((m) => (
            <a key={m.id} href={m.link} className={styles.language}>
              {m.text}
            </a>
          ))}
        </div>
        <div className={styles.nav}>
          <div className={styles.heading}>Navigation</div>
          {menu.map((m) => (
            <a key={m.id} href={m.link} className={styles.link}>
              {m.text}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        all right reserved
        <div className={styles.mail}>
          <img src="/images/mail.svg" alt="" />
          <a href="mailto:hqtraffpartners@gmail.com">
            hqtraffpartners@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
