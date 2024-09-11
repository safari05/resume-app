import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
   <main>
     <Hero/>
     <About/>
     <Portfolio/>
   </main>
  );
}
