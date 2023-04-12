import Head from "next/head";
import Image from "next/image";
import Hero from "../components/landing/hero.js";
import About from "../components/landing/about.js";
import Features from "../components/landing/features.js";
import Review from "../components/landing/review.js";
import Partners from "../components/landing/partner.js";
import JoinUs from "../components/landing/joinUs.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HQtraff</title>
      </Head>
      <Hero />
      <About />
      <Features />
      <Review />
      <Partners />
      <JoinUs />
    </div>
  );
}
