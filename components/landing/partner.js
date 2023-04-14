import Image from "next/image";
export default function Partners() {
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
    primaryHeader: "font-semibold text-[40px] mb-[50px] ",
    flexDiv:
      "bg-[#1a1a1a] rounded-[5px] lg:flex-nowrap flex-wrap lg:h-[150px] gap-[25px] p-[5px] flex  my-[20px] ",
    imgDiv: "bg-white w-[18%] grid rounded-[5px] place-item-center ",
    img: "w-[80px] mx-auto my-auto ",
    textDiv: "w-[50%] text-[13px] h-fit my-auto ",
    heading: "font-medium text-[20px] mb-[8px]",
    offerDiv:
      "w-[20%] text-[14px] border-x-2 border-r-white border-l-[#898989] text-center flex justify-center flex-wrap content-center",
    promoCodeDiv:
      "w-[8%] flex cursor-pointer justify-center content-center flex-wrap text-center",
    btnDiv:
      "w-[13%] flex justify-center content-center rounded-[5px] flex-wrap bg-[#393939] font-semibold px-[32px] text-center ",
  };
  const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.primaryHeader}>Our Service partners:</div>
      {partners.map((p) => (
        <div key={p.id} className={styles.flexDiv}>
          <div className={styles.imgDiv}>
            <Image
              src={p.image}
              width={100}
              className={styles.img}
              height={50}
            />
          </div>
          <div className={styles.textDiv}>
            <div className={styles.heading}>{p.name} </div>
            {p.description}
          </div>
          <div className={styles.offerDiv}>{p.offer}</div>
          <div
            className={styles.promoCodeDiv}
            onClick={() => copyToClipBoard(p.promo)}
          >
            <div>{p.promo}</div>
          </div>
          <a href={p.link} className={styles.btnDiv}>
            Go To The Site
          </a>
        </div>
      ))}
    </div>
  );
}
