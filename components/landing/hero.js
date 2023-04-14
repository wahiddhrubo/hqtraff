import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const styles = {
    wrapper:
      "relative lg:h-[750px] text-white text-[16px] grid place-items-center ",
    bgImgDiv: "absolute w-full h-full ",
    bgImg: "w-full object-cover h-full ",
    overlay: "absolute w-full bg-hero h-full opacity-90 z-[5] ",
    flexbox:
      "lg:px-[120px] mb-[50px] gap-[50px] relative my-auto flex-wrap lg:flex-nowrap flex z-10",
    textDiv:
      " lg:w-[820px] mt-[120px] lg:mt-0 p-5 lg:p-0 text-center lg:text-left ",
    heading: "lg:text-[62px] text-[32px] lg:leading-[82px] mb-[16px] ",
    btn: "block relative overflow-hidden  group px-[50px] mx-auto lg:mx-0 my-[16px] py-[15px] bg-primary-gradient font-semibold w-fit rounded-[5px] ",
    imgDiv: "p-8 lg:p-0",
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
            <span className="lg:bg-primary-gradient bg-primary font-semibold inline-block text-transparent bg-clip-text">
              sources of
            </span>{" "}
            <span className=" font-semibold text-primary bg-clip-text">
              {" "}
              traffic
            </span>
          </div>
          Start earning today
          <Link href="/" className={styles.btn}>
            <div className=" transition-all duration-350 group-hover:translate-x-0 translate-x-[-100%] flex px-[50px] flex-wrap content-center font-light text-[25px] justify-center absolute inset-0 w-full h-full">
              {" >"}
            </div>
            <span className="block transition-all duration-350 group-hover:translate-x-[1000%]">
              Join Now
            </span>
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
