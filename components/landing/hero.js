import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const styles = {
    wrapper:
      "relative h-[750px] text-white text-[16px] grid place-items-center ",
    bgImgDiv: "absolute w-full h-full ",
    bgImg: "w-full object-cover h-full ",
    overlay: "absolute w-full bg-hero h-full opacity-90 z-[5] ",
    flexbox: "lg:px-[120px] mb-[50px] gap-[50px] relative my-auto  flex z-10",
    textDiv: " w-[820px] ",
    heading: "text-[62px] leading-[82px] mb-[16px] ",
    btn: "block px-[50px] my-[16px] py-[15px] bg-primary-gradient font-semibold w-fit rounded-[5px] ",
    imgDiv: "",
    img: "",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgImgDiv}>
        <Image
          src="/images/hero-bg.png"
          width={1500}
          height={600}
          className={styles.bgImg}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.flexbox}>
        <div className={styles.textDiv}>
          <div className={styles.heading}>
            Effectively monetize all types and{" "}
            <span className="bg-primary-gradient font-semibold inline-block text-transparent bg-clip-text">
              sources of
            </span>{" "}
            <span className=" font-semibold text-primary bg-clip-text">
              {" "}
              traffic
            </span>
          </div>
          Start earning today
          <Link href="/" className={styles.btn}>
            Join Now
          </Link>
          Contact our manager after registration and
          <br /> get high rates on all offers.
        </div>
        <div className={styles.imgDiv}>
          <Image
            src="/images/hero-featured.png"
            width={720}
            height={650}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
