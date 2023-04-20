import Image from "next/image";
import Hamburger from "./hamburger";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function Navbar({ menu }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (ln) => {
    i18n.changeLanguage(ln);
  };
  console.log(i18n.language);
  const styles = {
    wrapper:
      "lg:px-[10px] hidden top-[32px] absolute z-[10] text-[#fff] lg:flex w-full ",
    logoDiv: "lg:ml-auto mr-auto ",
    logo: "",
    menu: "mx-auto lg:flex flex-wrap content-center gap-[18px] hidden  ",
    link: " text-[18px] h-fit mx-auto hover:scale-[.95] hover:text-[#d68d8d] transition-all",
    mobileNav: "mt-[-40px] lg:hidden overflow-hidden",
    btnDiv: "lg:flex flex-wrap content-center hidden mr-auto gap-[20px]",
    mobileLogo: "absolute top-10 left-[8%] z-10",
    btn: "h-fit my-auto",
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logoDiv}>
          <Link href="https://hqtraff.affise.com/v2" target="_blank">
            <Image
              src="/images/logo.svg"
              width={180}
              height={70}
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.menu}>
          {menu.map((m) => (
            <a key={m.id} href={m.link} className={styles.link}>
              {m.text}
            </a>
          ))}
        </div>
        <div className={styles.btnDiv}>
          <a
            href="https://hqtraff.affise.com/v2/sign/in"
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >
            Sign In{" "}
          </a>
          <a
            href="https://hqtraff.affise.com/v2/sign/up"
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >
            Sign Up{" "}
          </a>
          <select
            name=""
            id=""
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="bg-primary w-[45px] h-[45px] py-[8px] text-white rounded-full"
          >
            🌐
            <option value="EN" className="bg-transparent">
              EN
            </option>
            <option value="UK" className="bg-transparent">
              UK
            </option>
            <option value="RU" className="bg-transparent">
              RU
            </option>
          </select>
        </div>
        {/* <div className={styles.ham}>
        <Hamburger menu={menu} />
      </div> */}
      </div>

      <div className={styles.mobileNav}>
        <div className={styles.mobileLogo}>
          <Image
            src="/images/logo.svg"
            width={150}
            height={50}
            className={styles.logo}
          />
        </div>
        <div className="absolute top-[20px] z-[100] right-[8%]">
          <select
            name=""
            id=""
            onChange={(e) => changeLanguage(e.target.value)}
            defaultValue={i18n.language}
            className="bg-primary w-[45px] h-[45px] py-[8px] text-white rounded-full"
          >
            🌐
            <option value="EN" className="bg-transparent">
              EN
            </option>
            <option value="UK" className="bg-transparent">
              UK
            </option>
            <option value="RU" className="bg-transparent">
              RU
            </option>
          </select>
        </div>
        <Hamburger menu={menu} />
      </div>
    </>
  );
}

export default Navbar;
