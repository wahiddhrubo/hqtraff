import Image from "next/image";
export default function About() {
  const styles = {
    wrapper:
      "relative lg:h-[720px] text-white bg-overlay  lg:text-[24px] leading-[1.5] grid place-items-center ",
    flexbox:
      "lg:px-[120px] py-20 px-8 lg:p-0 text-center lg:text-left gap-[50px] relative my-auto lg:flex-nowrap flex-wrap flex z-10",
    bgImgDiv: "absolute z-[2] left-[-85px] top-[-110px] ",
    textDiv: " lg:w-[820px]  relative h-fit my-auto ",
    heading:
      "lg:text-[52px] text-[32px] font-semibold lg:leading-[82px] mb-[16px] ",
    btn: "block px-[50px] my-[16px] py-[15px] bg-primary-gradient font-semibold w-fit rounded-[5px] ",
    imgDiv: "px-10 lg:p-0",
    img: "",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.flexbox}>
        <div className={styles.textDiv}>
          <div className={styles.bgImgDiv}>
            <Image
              src="/images/about-thumb.png"
              width={300}
              height={450}
              className={styles.bgImg}
            />
          </div>
          <div className={styles.heading}>Who we are ?</div>
          <span className="opacity-90">
            HQtraff is an affiliate program in the gambling vertical with its
            own exclusive offers and more, founded by an arbitrage team with
            extensive experience and expertise, which they are ready to share
            with their partners.{" "}
          </span>
        </div>
        <div className={styles.imgDiv}>
          <Image
            src="/images/about-featured.png"
            width={720}
            height={650}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}
