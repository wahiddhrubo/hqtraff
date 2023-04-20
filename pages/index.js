import Head from "next/head";
import Image from "next/image";
import Hero from "../components/landing/hero.js";
import About from "../components/landing/about.js";
import Features from "../components/landing/features.js";
import Review from "../components/landing/review.js";
import Partners from "../components/landing/partner.js";
import JoinUs from "../components/landing/joinUs.js";
import Navbar from "../components/layout/navbar.js";
import Footer from "../components/layout/footer.js";
export default function Home() {
  const styles = {
    partner: "bg-overlay-dark px-[10%] py-[80px] text-white",
  };
  const menu = [
    { id: 1, text: "Home", link: "#top" },
    { id: 2, text: "Who Are We?", link: "#about" },
    { id: 3, text: "Why Chose Us", link: "#features" },
    { id: 4, text: "Our Reliable Partners", link: "#review" },
    { id: 5, text: "Our Services Partners", link: "#partner" },
  ];
  const lang = [
    { id: 1, text: "RU", value: "russian" },
    { id: 2, text: "EN", value: "english" },
    { id: 3, text: "UK", value: "UK" },
  ];
  const socialHandler = [
    { id: 1, img: "/images/ig.svg", link: "/" },
    { id: 3, img: "/images/email.svg", link: "mailto:support@hqtraff.com" },
    { id: 2, img: "/images/tg.svg", link: "https://t.me/hqtraff_news" },
  ];
  return (
    <div>
      <Head>
        <title>HQtraff</title>
      </Head>
      <Navbar menu={menu} />
      <Hero />
      <About />
      <Features />
      <div className={styles.partner}>
        <Review />
        <Partners />
        <JoinUs />
      </div>
      <Footer menu={menu} lang={lang} socialHandler={socialHandler} />
    </div>
  );
}
