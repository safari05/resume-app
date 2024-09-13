import React from "react";
import Link from "next/link";
//import imageHero from "/foto-safari.png";
import { MotionDiv, MotionImage } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framerVariant";

export default function Hero() {
  return (
    <section id="home" className="pt-36">
      <div className="h-dvh  overflow-hidden md:flex-row  pt-10 container">
        <div className="w-72 h-72 bg-blue-300 rounded-full blur-3xl -z-10 opacity-40 absolute">

        </div>
        <div className="flex flex-wrap">
          <div className="w-full self-center mb-20 px-4 lg:w-1/2">
            <MotionDiv
                initial="initial"
                animate="animate"
                variants={variants.moveRight}
                transition={transition.moveRight}
            >
            <h1 className="text-base font-semibold text-primary md:text-xl">
              {" "}
              Hai Every one 👋 I am
              <span className="block font-bold text-dark text-4xl mt-2 lg:text-5xl">
                Eri Safari
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-3 lg:text-2xl">
              {" "}
              Web <span className="text-dark font-bold">Developer</span>{" "}
            </h2>
            <ul className="font-medium text-slate-400 mb-10 leading-relaxed">
              <li>
                {" "}
                Phone Number :{" "}
                <span className="font-bold text-dark">+628118270775</span>
              </li>
              <li>
                {" "}
                Email :{" "}
                <span className="font-bold text-dark">
                  safari.erie@gmail.com
                </span>
              </li>
            </ul>
            <Link
              href="#"
              className="text-base text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-85 transition duration-300 ease-in-out"
            >
              {" "}
              Contact
            </Link>
            </MotionDiv>
          </div>
          <div className="w-full self-end px-4 md:w-1/2 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0  lg:right-0 ">
              <MotionImage
                 initial="initial"
                 animate="animate"
                 variants={variants.moveLeft}
                 transition={{
                   ...transition.moveLeft,
                   delay: 1.5,
                 }}
                src={"/foto-safari.png"}
                alt="Hero Sections"
                placeholder="empty"
                className="object-cover"
                width={300}
                height={300}
              />
              <span className="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-125 ">
                <svg
                  width={600}
                  height={600}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1c3b5d"
                    d="M31.4,-25.6C41.8,-11.9,52.2,1.2,50,11.6C47.7,22,32.9,29.7,17,38.6C1.1,47.4,-15.7,57.5,-34.4,54.9C-53.2,52.3,-73.8,36.9,-74,21.2C-74.2,5.4,-54,-10.7,-38.2,-25.6C-22.5,-40.5,-11.2,-54.1,-0.4,-53.8C10.5,-53.5,20.9,-39.3,31.4,-25.6Z"
                    transform="translate(100 100) scale(1)" className="shadow-xl shadow-slate-200"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
