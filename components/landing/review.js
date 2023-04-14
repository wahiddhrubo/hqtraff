import Image from "next/image";
import { motion, useAnimation, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
export default function Partners() {
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
  const logos = [
    { id: 1, src: "/images/images-review-logo-1.svg", alt: "logos" },
    { id: 2, src: "/images/images-review-logo-2.svg", alt: "logos" },
    { id: 3, src: "/images/images-review-logo-3.svg", alt: "logos" },
    { id: 4, src: "/images/images-review-logo-4.svg", alt: "logos" },
    { id: 5, src: "/images/images-review-logo-5.svg", alt: "logos" },
    { id: 6, src: "/images/images-review-logo-6.svg", alt: "logos" },
    { id: 7, src: "/images/images-review-logo-7.svg", alt: "logos" },
    { id: 8, src: "/images/images-review-logo-8.svg", alt: "logos" },
  ];
  const partnerControls = useAnimation();
  useEffect(() => {
    partnerControls.start("animate");
  }, []);
  const reviews = [
    {
      id: 1,
      review:
        "We have been working with HQtraff since  2020 and are very satisfied with our cooperation. The guys have high-quality traffic that pays off, HQtraff is highly recommended!",
      img: "/images/images-review-logo-1.svg",
    },
    {
      id: 2,
      review:
        "We have been working with HQtraff for a	  very long time, we approach our work	  creatively and responsibly. Only positive	  impression about our work, our products	  are available in pp for one of the best	  conditions on the market. We will be happy to continue working with you.",
      img: "/images/images-review-logo-4.svg",
    },
    {
      id: 3,
      review:
        "Cooperation with HQtraff means pleasant and high-quality communication and fulfillment of all agreements. The guys always know what is needed to achieve our common goal and work fruitfully for the result. it’s a pleasure to work with them and see them develop from an arbitrage team into a full-fledged affiliate program. ",
      img: "/images/images-review-logo-2.svg",
    },
    {
      id: 4,
      review:
        "A reliable tam, we have know the guys for a long time, they have extensive experience in the industry.	  Always happy to work with them.",
      img: "/images/images-review-logo-5.svg",
    },
  ];
  const partnerControlsVariarnt = {
    animate: {
      x: "-75%",
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        // repeatType: "mirror",
      },
    },
  };

  const styles = {
    primaryHeader:
      "font-semibold relative   w-fit overflow-hidden lg:text-[40px]  text-[28px] lg:mb-[42px] mb-2 ",
    logosDiv:
      " rounded-[5px] absolute flex-grow gap-[32px] p-[5px] flex  mt-[20px] mb-[120px] ",
    imgDiv: "lg:w-[150px] w-[42px] grid rounded-[5px] place-item-center ",
    secondaryHeader:
      "font-semibold lg:text-[40px] relative mx-auto  w-fit overflow-hidden text-[28px]  text-center lg:mb-[42px] mb-2 ",
    flexbox:
      "gap-[20px] mb-[120px] w-full flex flex-wrap justify-center mx-auto  ",
    rev: "relative bg-[#1A1A1A] py-[25px] text-center lg:text-[13px] text-[10px] px-[25px] w-[280px] lg:h-[300px] h-[200px] rounded-[5px] ",
    reviewImg: "absolute bottom-[25px] inset-x-0 mt-auto mx-auto w-fit h-fit",
    img: "mt-auto cursor-pointer hover:scale-125 transition-all ",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.primaryHeader}>
        {" "}
        <motion.div
          variants={textAnim}
          viewport={{ once: true }}
          whileInView="anim"
          className="absolute w-full h-full z-10 bg-white"
        ></motion.div>
        Our reliable partners:
      </div>
      <div className="relative h-[150px] overflow-hidden">
        <motion.div
          animate={partnerControls}
          variants={partnerControlsVariarnt}
          className={styles.logosDiv}
        >
          {logos.map((l) => (
            <div key={l.id} className={styles.imgDiv}>
              <Image
                onMouseEnter={() => partnerControls.stop("animate")}
                onMouseLeave={() => partnerControls.start("animate")}
                src={l.src}
                width={100}
                className={styles.img}
                height={50}
              />
            </div>
          ))}
          {logos.map((l) => (
            <div key={l.id} className={styles.imgDiv}>
              <Image
                onMouseEnter={() => partnerControls.stop("animate")}
                onMouseLeave={() => partnerControls.start("animate")}
                src={l.src}
                width={100}
                className={styles.img}
                height={50}
              />
            </div>
          ))}
          {logos.map((l) => (
            <div key={l.id} className={styles.imgDiv}>
              <Image
                onMouseEnter={() => partnerControls.stop("animate")}
                onMouseLeave={() => partnerControls.start("animate")}
                src={l.src}
                width={100}
                className={styles.img}
                height={50}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className={styles.secondaryHeader}>
        {" "}
        <motion.div
          variants={textAnim}
          whileInView="anim"
          className="absolute w-full h-full z-10 bg-white"
        ></motion.div>
        They talk about us
      </div>
      <div className={styles.flexbox}>
        {reviews.map((f) => (
          <motion.div
            variants={variant}
            whileInView="anim"
            initial="initial"
            viewport={{ once: true }}
            key={f.id}
            className={styles.rev}
          >
            <div className="mb-auto">{f.review}</div>
            <div className={styles.reviewImg}>
              <Image
                src={f.img}
                width={96}
                height={45}
                className={styles.img}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
