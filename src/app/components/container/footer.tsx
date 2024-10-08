"use client";
import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t ">
      <div className="container flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 justify-between mt-4">
        <Image
          src={"/assets/images/logo.png"}
          alt="logo"
          width={40}
          height={40}
        />
        <h3 className="sm:text-2xl text-xl text-white">
           <span className="text-yellow-400 ">Eri</span> Safari <br/>
        </h3>
      </div>
      <div className=" text-center py-8">
        <p> ©️ Eri Safari 2023-2024. All rights reserved</p>
      </div>
    </footer>
  );
}
