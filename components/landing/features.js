import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function Features() {
  const { t } = useTranslation();
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
  const variant = {
    anim: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
    initial: {
      opacity: 0,
      y: 20,
    },
  };
  const fea = [
    {
      id: 1,
      title: "Own products in Latam and CIS",
      img: "/images/fea-1.png",
    },
    {
      id: 2,
      title: "Stable Payments",
      img: "/images/fea-2.png",
    },
    {
      id: 3,
      title: "Help at all stages of launch for beginners",
      img: "/images/fea-3.png",
    },
    {
      id: 4,
      title: "Free creatives",
      img: "/images/fea-4.png",
    },
    {
      id: 5,
      title: "Free apps for efficient strait",
      img: "/images/fea-5.png",
    },
    {
      id: 6,
      title: "Strong support of personal managers",
      img: "/images/fea-6.png",
    },
    {
      id: 7,
      title: "Only converting offers",
      img: "/images/fea-7.png",
    },
    {
      id: 8,
      title: "Easy integration with any trackers",
      img: "/images/fea-8.png",
    },
  ];
  const styles = {
    wrapper:
      "relative lg:h-[815px] text-center text-white text-[16px] grid place-items-center ",
    bgImgDiv: "absolute w-full h-full ",
    heading:
      "lg:text-[48px] relative mx-auto   w-fit overflow-hidden  text-[32px] font-semibold lg:leading-[82px] lg:mb-[16px] mt-[52px] ",
    bgImg: "w-full object-cover h-full ",
    overlay: "absolute w-full bg-overlay h-full opacity-90 z-[5] ",
    flexbox:
      "gap-[20px] mb-[52px] mt-[16px] lg:m-0 w-full flex flex-wrap mx-auto justify-center ",
    fea: "bg-[#1A1A1A] flex flex-wrap w-[40%] text-[10px] lg:text-[16px] px-3 py-5 lg:py-0 flex-wrap content-center justify-center lg:px-[30px] lg:w-[250px] lg:h-[250px] rounded-[5px] ",
    img: "mx-auto block w-[40%] lg:w-[95px] mb-3 lg:mb-[35px]",
  };
  return (
    <div id="features" className={styles.wrapper}>
      <div className={styles.bgImgDiv}>
        <Image
          src="/images/features-bg.png"
          width={1500}
          height={600}
          className={styles.bgImg}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className="z-10 w-[80%] ">
        <div className={styles.heading}>
          <motion.div
            variants={textAnim}
            viewport={{ once: true }}
            whileInView="anim"
            className="absolute w-full h-full z-10 bg-white"
          ></motion.div>
          {t("Why Chose us?")}
        </div>
        <div className={styles.flexbox}>
          {fea.map((f) => (
            <motion.div
              whileInView="anim"
              variants={variant}
              viewport={{ once: true }}
              initial="initial"
              key={f.id}
              className={styles.fea}
            >
              <Image
                src={f.img}
                width={96}
                height={96}
                className={styles.img}
              />
              <div className="w-full">{t(f.title)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
