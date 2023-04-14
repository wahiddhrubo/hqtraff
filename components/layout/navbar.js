import Image from "next/image";
function Navbar({ menu }) {
  const styles = {
    wrapper: "lg:px-[10px] top-[32px] absolute z-[10] text-[#fff] flex w-full ",
    logoDiv: "ml-auto",
    logo: "",
    menu: "mx-auto flex gap-[18px] ",
    link: " text-[18px]",
    btnDiv: "flex mr-auto gap-[20px]",
    btn: "",
    btn: "",
  };
  return (
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
    </div>
  );
}

export default Navbar;
