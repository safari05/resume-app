
import Hero from "./components/hero";
import Technology from "./components/technology";
//import { Luckiest_Guy } from "next/font/google";

//const luck = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });


export default function Home() {
  return (
      <>
        <Hero/>
        <Technology/>
      </>
  );
}
