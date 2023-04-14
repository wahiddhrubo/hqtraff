import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  const imgVariant = {
    anim: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeIn",
      },
    },
    initial: {
      y: 50,
      opacity: 0,
    },
  };
  const textAnim = {
    anim: {
      x: "101%",
      transition: {
        // delay: 0.3,
        duration: 0.5,
        ease: "linear",
      },
    },
  };
  const staggerVariant = {
    anim: {
      y: 0,
      transition: {
        staggerChildren: 0.9,
      },
    },
    initial: {
      y: 20,
    },
  };
  const opacityVariant = {
    anim: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
  };
  const headingVariant = {
    anim: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    initial: {
      opacity: 0,
    },
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
        <motion.div
          variants={staggerVariant}
          viewport={{ once: true }}
          whileInView="anim"
          initial="initial"
          className={styles.textDiv}
        >
          <motion.div variants={headingVariant} className={styles.heading}>
            <motion.span
              variants={opacityVariant}
              className="relative lg:block overflow-hidden"
            >
              <motion.div
                variants={textAnim}
                className="absolute hidden lg:block w-full h-full z-10 bg-white"
              ></motion.div>
              Effectively monetize all
            </motion.span>{" "}
            <motion.span
              variants={opacityVariant}
              className="relative lg:block  overflow-hidden"
            >
              <motion.div
                variants={textAnim}
                className="absolute hidden lg:block w-full h-full z-10 bg-white"
              ></motion.div>
              types and{" "}
              <span className="lg:bg-primary-gradient bg-primary font-semibold inline-block text-transparent bg-clip-text">
                sources of
              </span>{" "}
            </motion.span>
            <motion.span
              variants={opacityVariant}
              className="relative lg:block w-fit overflow-hidden"
            >
              <motion.div
                variants={textAnim}
                className="absolute hidden lg:block w-full h-full z-10 bg-white"
              ></motion.div>
              <span className=" font-semibold text-primary bg-clip-text">
                {" "}
                traffic
              </span>
            </motion.span>
          </motion.div>
          <motion.span
            className="relative mx-auto lg:mx-0 block w-fit overflow-hidden"
            variants={opacityVariant}
          >
            <motion.div
              variants={textAnim}
              className="absolute w-full h-full z-10 bg-white"
            ></motion.div>
            Start earning today
          </motion.span>
          <motion.div
            className="relative lg:block w-fit mx-auto lg:mx-0 overflow-hidden"
            variants={opacityVariant}
          >
            <motion.div
              variants={textAnim}
              className="absolute w-full h-full z-10 bg-white"
            ></motion.div>
            <Link href="/" className={styles.btn}>
              <div className=" transition-all duration-350 group-hover:translate-x-0 translate-x-[-100%] flex px-[50px] flex-wrap content-center font-light text-[25px] justify-center absolute inset-0 w-full h-full">
                {" >"}
              </div>
              <span className="block transition-all duration-350 group-hover:translate-x-[1000%]">
                Join Now
              </span>
            </Link>
          </motion.div>
          <motion.span
            className="relative mx-auto lg:mx-0 block w-fit overflow-hidden"
            variants={opacityVariant}
          >
            <motion.div
              variants={textAnim}
              className="absolute w-full h-full z-10 bg-white"
            ></motion.div>
            Contact our manager after registration and
            <br /> get high rates on all offers.
          </motion.span>
        </motion.div>
        <motion.div
          variants={imgVariant}
          whileInView="anim"
          viewport={{ once: true }}
          initial="initial"
          className={styles.imgDiv}
        >
          <Image
            src="/images/hero-featured.png"
            width={720}
            height={650}
            className={styles.img}
          />
        </motion.div>
      </div>
    </div>
  );
}
