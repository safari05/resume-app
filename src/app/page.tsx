import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import { MotionDiv, MotionImage } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framerVariant";
import { cn } from "@/utils/classNames";
import { Luckiest_Guy } from "next/font/google";
import { SOCIAL_ICONS } from "@/utils/data";

const luck = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
    </>
   
  );
}
