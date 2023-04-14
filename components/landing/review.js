import Image from "next/image";
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
  const styles = {
    primaryHeader: "font-semibold text-[40px] mb-[42px] ",
    flexDiv:
      " rounded-[5px] flex-grow gap-[32px] p-[5px] flex  mt-[20px] mb-[120px] ",
    imgDiv: "w-[10%] grid rounded-[5px] place-item-center ",
    secondaryHeader: "font-semibold text-[40px] text-center mb-[42px] ",
    flexbox: "gap-[20px] mb-[120px] w-full flex flex-wrap mx-auto  ",
    rev: "relative bg-[#1A1A1A] py-[25px] text-center text-[13px] px-[25px] w-[280px] h-[300px] rounded-[5px] ",
    reviewImg: "absolute bottom-[25px] inset-x-0 mt-auto mx-auto w-fit h-fit",
    img: "mt-auto",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.primaryHeader}>Our reliable partners:</div>
      <div className={styles.flexDiv}>
        {logos.map((l) => (
          <div key={l.id} className={styles.imgDiv}>
            <Image src={l.src} width={100} className={styles.img} height={50} />
          </div>
        ))}
      </div>
      <div className={styles.secondaryHeader}>They talk about us</div>
      <div className={styles.flexbox}>
        {reviews.map((f) => (
          <div key={f.id} className={styles.rev}>
            <div className="mb-auto">{f.review}</div>
            <div className={styles.reviewImg}>
              <Image
                src={f.img}
                width={96}
                height={45}
                className={styles.img}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
