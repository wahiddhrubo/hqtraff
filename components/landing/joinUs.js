import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function Partners() {
  const { t } = useTranslation();
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
  const teams = [
    {
      id: 1,
      name: "Web Masters",
      team: [
        {
          user: "HQtraff_Egor",
          img: "/images/user.png",
          pos: "Head of Affiliate",
          link: "mailto:support@hqtraff.com",
        },
        {
          user: "HQ_Support",
          img: "/images/user.png",
          pos: "Support",
          link: "https://t.me/hqtraff_support",
        },
      ],
    },

    {
      id: 2,
      name: "Advertisers",
      team: [
        {
          user: "HQ_Support",
          img: "/images/user.png",
          pos: "Support",
          link: "https://t.me/hqtraff_support",
        },
      ],
    },
  ];
  const styles = {
    wrapper: "mt-[180px]",
    textDix:
      "lg:w-[65%] w-[80%] mx-auto mb-[50px] text-[9px] lg:text-[16px] text-center  ",
    secondaryHeader:
      "font-semibold relative mx-auto   w-fit overflow-hidden lg:text-[40px] text-[28px] text-center lg:mb-[42px] mb-2 ",
    flexbox:
      "gap-[20px] justify-center mb-[30px] w-full flex flex-wrap mx-auto  ",
    team: "relative bg-[#1A1A1A] py-[25px] text-[13px] px-[25px] w-[450px]  rounded-[5px] ",
    reviewImg: "absolute bottom-0 inset-x-0 mt-auto mx-auto w-fit h-fit",
    btn: "block relative overflow-hidden  block transition-all duration-[550] hover:bg-reverse-primary-gradient px-[50px] mx-auto  my-[16px] py-[15px] bg-primary-gradient font-semibold w-fit rounded-[5px] ",
    img: "mt-auto",
    teamTitle: "font-semibold mb-[30px] text-[28px] ",
    member: "flex  mb-[42px] gap-[16px] ",
    teamImg: "",
    img: "my-auto",
    teamDetails: "",
    teamPos: "text-[16px] mb-2",
    link: "flex gap-2 my-2",
    icon: "",
  };

  const textAnim = {
    anim: {
      x: "105%",
      transition: {
        // delay: 0.3,
        duration: 0.5,
        ease: "linear",
      },
    },
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.textDix}>
        <div className={styles.secondaryHeader}>
          {" "}
          <motion.div
            variants={textAnim}
            viewport={{ once: true }}
            whileInView="anim"
            className="absolute w-full h-full z-10 bg-white"
          ></motion.div>
          {t("Join and earn with us!")}
        </div>
        {t(
          "If you are a webmaster or an advertiser looking for a reliable network for cooperation, we are glad to welcome you to our team."
        )}
      </div>
      <div className={styles.flexbox}>
        {teams.map((tms) => (
          <div key={tms.id} className={styles.team}>
            <div className={styles.teamTitle}>{t(tms.name)}</div>
            {tms.team.map((tm) => (
              <div key={tm.id} className={styles.member}>
                <div className={styles.teamImg}>
                  <a href="mailto:support@hqtraff.com">
                    <Image
                      src={tm.img}
                      width={52}
                      height={52}
                      className={styles.img}
                    />
                  </a>
                </div>
                <div className={styles.teamDetails}>
                  <a href="mailto:support@hqtraff.com">
                    <div className={styles.teamPos}>{tm.pos} </div>
                  </a>
                  <a
                    className={styles.link}
                    href={tm.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/tg.svg"
                      width={15}
                      height={15}
                      className={styles.icon}
                    />
                    {tm.user}
                  </a>
                  <a
                    className={styles.link}
                    href="mailto:support@hqtraff.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/images/email.svg"
                      width={15}
                      height={15}
                      className={styles.icon}
                    />
                    support@hqtraff.com
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Link
        href="https://t.me/hqtraff_support"
        target="_blank"
        className={styles.btn}
      >
        {t("Contact Us")}
      </Link>
    </div>
  );
}
