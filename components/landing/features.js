import Image from "next/image";
export default function Features() {
	const styles = {
		wrapper:
			"relative h-screen text-center text-white text-[16px] grid place-items-center ",
		bgImgDiv: "absolute w-full h-full ",
		heading: "text-[48px] font-semibold leading-[82px] mb-[16px] ",
		bgImg: "w-full object-cover h-full ",
		overlay: "absolute w-full bg-overlay h-full opacity-90 z-[5] ",
		flexbox: "gap-[20px] w-full flex flex-wrap mx-auto justify-center ",
		fea: "bg-[#1A1A1A] py-[50px] px-[30px] w-[250px] h-[250px] rounded-[5px] ",
		img: "mx-auto",
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
					<div className={styles.fea}>
						<Image
							src="/"
							width={96}
							height={96}
							className={styles.img}
						/>
						Own products in Latam and CIS
					</div>
					<div className={styles.fea}>
						<Image
							src="/"
							width={96}
							height={96}
							className={styles.img}
						/>
						Own products in Latam and CIS
					</div>
					<div className={styles.fea}>
						<Image
							src="/"
							width={96}
							height={96}
							className={styles.img}
						/>
						Own products in Latam and CIS
					</div>
					<div className={styles.fea}>
						<Image
							src="/"
							width={96}
							height={96}
							className={styles.img}
						/>
						Own products in Latam and CIS
					</div>
					<div className={styles.fea}>
						<Image
							src="/"
							width={96}
							height={96}
							className={styles.img}
						/>
						Own products in Latam and CIS
					</div>
					<div className={styles.fea}>
						<Image
							src="/"
							width={96}
							height={96}
							className={styles.img}
						/>
						Own products in Latam and CIS
					</div>
					<div className={styles.fea}>
						<Image
							src="/"
							width={96}
							height={96}
							className={styles.img}
						/>
						Own products in Latam and CIS
					</div>
				</div>
			</div>
		</div>
	);
}
