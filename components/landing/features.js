import Image from "next/image";
export default function Features() {
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
    heading: "text-[48px] font-semibold leading-[82px] mb-[16px] ",
    bgImg: "w-full object-cover h-full ",
    overlay: "absolute w-full bg-overlay h-full opacity-90 z-[5] ",
    flexbox: "gap-[20px] w-full flex flex-wrap mx-auto justify-center ",
    fea: "bg-[#1A1A1A] flex flex-wrap content-center justify-center px-[30px] w-[250px] h-[250px] rounded-[5px] ",
    img: "mx-auto mb-[35px]",
  };
  return (
    <div className={styles.wrapper}>
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
        <div className={styles.heading}>Why Chose us?</div>
        <div className={styles.flexbox}>
          {fea.map((f) => (
            <div key={f.id} className={styles.fea}>
              <Image
                src={f.img}
                width={96}
                height={96}
                className={styles.img}
              />
              {f.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
