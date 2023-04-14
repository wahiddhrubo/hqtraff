import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
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
  const partners = [
    {
      id: "1",
      name: "Adheart",
      description:
        "Adheart is a service for collecting and analyzing advertising creatives on the Fb network and related platforms. AdHeart is currently simply irreplaceable due to its price and quality of service.",
      offer: "-15% on the first payment",
      image: "/images/promo-1.svg",
      promo: "HQTRAFF",
      link: "/",
    },
    {
      id: "2",
      name: "Adspect ",
      description:
        "Adspect is a cloaking service. Based on JS fingerprinting and VLA machine learning with built-in white generators. Includes several competing services and a REST API for automation.",
      offer: "-15% on the first payment",
      image: "/images/promo-2.svg",
      promo: "HQTRAFF",
      link: "/",
    },
    {
      id: "3",
      name: "Adspy",
      description: "AdSpy is the largest ad database in the world.",
      offer: "Free on the first payment",
      image: "/images/promo-3.svg",
      promo: "HQTRAFF",
      link: "/",
    },
    {
      id: "4",
      name: "Cloaking house",
      description:
        "Cloud service for filtering unwanted traffic and protection from bans. Traffic filtering using Machine Learning technologies. Easy integration in two minutes!",
      offer: "-30% on the first payment",
      image: "/images/promo-4.svg",
      promo: "HQTRAFF",
      link: "/",
    },
    {
      id: "5",
      name: "Dolphin",
      description:
        "Dolphin is a service for automating work. Manage all accounts from one tab, comment moderation, ad autofill and teamwork",
      offer: "-20% on the first payment",
      image: "/images/promo-5.svg",
      promo: "HQTRAFF",
      link: "/",
    },
    {
      id: "6",
      name: "Dolphin{anty}",
      description:
        "Dolphin{anty} is a reliable and convenient antidetect browser with a large number of substitutions. Automation of processes and the possibility of teamwork.",
      offer: "-20% on the first payment",
      image: "/images/promo-6.svg",
      promo: "HQTRAFF",
      link: "/",
    },
    {
      id: "7",
      name: "EPN.net",
      description:
        "Virtual cards 18 BIN of American banks, fit perfectly with advertising cabinets, keep a high span. Free cards in any quantity, transparent commissions - from 2%, team access, auto-replenishment.",
      offer: "-20% on the first payment",
      image: "/images/promo-7.svg",
      promo: "HQTRAFF",
      link: "/",
    },
  ];
  const styles = {
    primaryHeader: "font-semibold lg:text-[40px] text-[28px] lg:mb-[50px] ",
    flexDiv:
      "bg-[#1a1a1a] rounded-[5px] lg:flex-nowrap flex-wrap lg:h-[150px] gap-[25px] p-[5px] flex  my-[20px] ",
    imgDiv:
      "bg-white lg:w-[18%] w-full h-[150px] grid rounded-[5px] place-item-center ",
    img: "w-[125px] mx-auto my-auto ",
    textDiv: "lg:w-[50%] w-full text-[13px] h-fit my-auto ",
    heading: "font-medium text-[20px] mb-[8px]",
    offerDiv:
      "lg:w-[20%] w-full text-[14px] border-x-2 border-r-white border-l-[#898989] text-center flex justify-center flex-wrap content-center",
    promoCodeDiv:
      "lg:w-[8%] w-full flex  justify-center content-center flex-wrap text-center",
    btnDiv:
      "lg:w-[13%] w-full relative group overflow-hidden h-[52px] lg:h-full flex justify-center content-center rounded-[5px] flex-wrap bg-[#393939] font-semibold px-[32px] text-center ",
  };
  const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.primaryHeader}>Our Service partners:</div>
      {partners.map((p) => (
        <motion.div
          whileInView="anim"
          variants={variant}
          initial="initial"
          viewport={{ once: true }}
          key={p.id}
          className={styles.flexDiv}
        >
          <div className={styles.imgDiv}>
            <Image
              src={p.image}
              width={150}
              className={styles.img}
              height={75}
            />
          </div>
          <div className={styles.textDiv}>
            <div className={styles.heading}>{p.name} </div>
            {p.description}
          </div>
          <div className={styles.offerDiv}>{p.offer}</div>
          <div className={styles.promoCodeDiv}>
            <div
              className="h-fit cursor-pointer"
              onClick={() => copyToClipBoard(p.promo)}
            >
              {p.promo}
            </div>
          </div>
          <a href={p.link} className={styles.btnDiv}>
            <div className=" transition-all duration-350 group-hover:translate-x-0 translate-x-[-100%] flex px-[50px] flex-wrap content-center font-light text-[25px] justify-center absolute inset-0 w-full h-full">
              {" >"}
            </div>
            <span className="block transition-all duration-350 group-hover:translate-x-[1000%]">
              Go To The Site
            </span>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
