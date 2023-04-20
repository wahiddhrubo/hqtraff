import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  const styles = {
    wrapper:
      "relative lg:h-[720px] text-white bg-overlay  lg:text-[17px] leading-[1.5] grid place-items-center ",
    flexbox:
      "lg:px-[120px] py-20 px-8 lg:p-0 text-center lg:text-left gap-[50px] relative my-auto lg:flex-nowrap flex-wrap flex z-10",
    bgImgDiv: "absolute z-[2] left-[-85px] top-[-110px] ",
    textDiv: " lg:w-[820px]  relative h-fit my-auto ",
    heading:
      "lg:text-[52px] overflow-hidden relative w-fit mx-auto lg:mx-0 text-[32px] font-semibold lg:leading-[82px] mb-[16px] ",
    btn: "block px-[50px] my-[16px] py-[15px] bg-primary-gradient font-semibold w-fit rounded-[5px] ",
    imgDiv: "px-10 lg:p-0",
    img: "",
  };
  const imgVariant = {
    anim: {
      y: 0,
      opacity: 1.5,
      transition: {
        duration: 1,
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
      x: "100%",
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
        staggerChildren: 0.4,
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
  return (
    <div id="about" className={styles.wrapper}>
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
          <motion.div
            variants={staggerVariant}
            whileInView="anim"
            initial="initial"
            viewport={{ once: true }}
          >
            <div className={styles.heading}>
              <motion.div
                variants={textAnim}
                className="absolute w-full h-full z-10 bg-white"
              ></motion.div>
              {t("Who we are?")}
            </div>
            <motion.span
              variants={opacityVariant}
              className="block relative overflow-hidden opacity-90"
            >
              <motion.div
                variants={textAnim}
                className="absolute w-full h-full z-10 bg-white"
              ></motion.div>
              {t(
                "HQtraff is an affiliate program in the gambling vertical with its own exclusive offers and more, founded by an arbitrage team with extensive experience and expertise, which they are ready to share with their partners."
              )}
            </motion.span>
          </motion.div>
        </div>
        <motion.div
          variants={imgVariant}
          viewport={{ once: true }}
          whileInView="anim"
          initial="initial"
          className={styles.imgDiv}
        >
          <Image
            src="/images/about-featured.png"
            width={720}
            height={650}
            className={styles.img}
          />
        </motion.div>
      </div>
    </div>
  );
}
