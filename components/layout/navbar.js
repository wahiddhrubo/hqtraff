import Image from "next/image";
import Hamburger from "./hamburger";
function Navbar({ menu }) {
  const styles = {
    wrapper:
      "lg:px-[10px] hidden top-[32px] absolute z-[10] text-[#fff] lg:flex w-full ",
    logoDiv: "lg:ml-auto mr-auto ",
    logo: "",
    menu: "mx-auto lg:flex gap-[18px] hidden  ",
    link: " text-[18px] hover:scale-[.95] hover:text-[#d68d8d] transition-all",
    mobileNav: "mt-[-40px] lg:hidden",
    btnDiv: "lg:flex hidden mr-auto gap-[20px]",
    mobileLogo: "absolute top-10 left-[8%] z-10",
    btn: "",
    btn: "",
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logoDiv}>
          <Image
            src="/images/logo.svg"
            width={150}
            height={50}
            className={styles.logo}
          />
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
        <Hamburger menu={menu} />
      </div>
    </>
  );
}

export default Navbar;
