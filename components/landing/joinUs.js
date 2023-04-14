import Image from "next/image";
import Link from "next/link";
export default function Partners() {
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
          img: "/images/user.svg",
          pos: "Head of Affiliate",
        },
        {
          user: "HQ_Support",
          img: "/images/user.svg",
          pos: "Support",
        },
      ],
    },

    {
      id: 2,
      name: "Advertisers",
      team: [
        {
          user: "HQ_Support",
          img: "/images/user.svg",
          pos: "Support",
        },
      ],
    },
  ];
  const styles = {
    wrapper: "mt-[180px]",
    textDix:
      "lg:w-[65%] w-[80%] mx-auto mb-[50px] text-[9px] lg:text-[16px] text-center  ",
    secondaryHeader:
      "font-semibold lg:text-[40px] text-[28px] text-center lg:mb-[42px] mb-2 ",
    flexbox:
      "gap-[20px] justify-center mb-[30px] w-full flex flex-wrap mx-auto  ",
    team: "relative bg-[#1A1A1A] py-[25px] text-[13px] px-[25px] w-[450px]  rounded-[5px] ",
    reviewImg: "absolute bottom-0 inset-x-0 mt-auto mx-auto w-fit h-fit",
    btn: "block px-[50px] relative overflow-hidden group mx-auto my-[16px] py-[15px] bg-primary-gradient font-semibold w-fit rounded-[5px] ",
    img: "mt-auto",
    teamTitle: "font-semibold mb-[30px] text-[28px] ",
    member: "flex  mb-[42px] gap-[16px] ",
    teamImg: "",
    img: "my-auto",
    teamDetails: "",
    teamPos: "text-[16px] mb-2",
    link: "flex gap-2",
    icon: "",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.textDix}>
        <div className={styles.secondaryHeader}>Join and earn with us!</div>
        If you are a webmaster or an advertiser looking for a reliable network
        for cooperation, we are glad to welcome you to our team. Contact Us
      </div>
      <div className={styles.flexbox}>
        {teams.map((t) => (
          <div key={t.id} className={styles.team}>
            <div className={styles.teamTitle}>{t.name}</div>
            {t.team.map((tm) => (
              <div key={tm.id} className={styles.member}>
                <div className={styles.teamImg}>
                  <Image
                    src={tm.img}
                    width={52}
                    height={52}
                    className={styles.img}
                  />
                </div>
                <div className={styles.teamDetails}>
                  <div className={styles.teamPos}>{tm.pos} </div>
                  <a
                    className={styles.link}
                    href={`https://t.me/${tm.user}`}
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
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Link href="/" className={styles.btn}>
        <div className=" text-white transition-all duration-350 group-hover:translate-x-0 translate-x-[-100%] flex px-[50px] flex-wrap content-center font-light text-[25px] justify-center absolute inset-0 w-full h-full">
          {" >"}
        </div>
        <span className="block transition-all duration-350 group-hover:translate-x-[1000%]">
          Contact Us
        </span>
      </Link>
    </div>
  );
}
