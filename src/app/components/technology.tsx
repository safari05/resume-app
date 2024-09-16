import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiRedis, DiNetmagazine, DiMsqlServer } from "react-icons/di";
import { FaGithubSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technology = () => {
  return (
    <section id="technology" className="container pb-24">
      <h1 className="text-primary my-10 text-4xl text-center">Technology</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="font-medium text-white text-center">React</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl " />
          <p className="font-medium text-white text-center">Next.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNode className="text-7xl text-green-500" />
          <p className="font-medium text-white text-center">Node.js</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center">
            <DiNetmagazine className="text-7xl" />
             <p className="font-medium text-white text-center">.Net 4.8, Net Core(C#)</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMsqlServer className="text-7xl text-red-400" />
          <p className="font-medium text-white text-center">SQL Server</p>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-500" />
          <p className="font-medium text-white text-center">PostgreSQL</p>
        </div>
       
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center justify-center">
          <FaGithubSquare className="text-7xl" />
          <p className="font-medium text-white text-center">Version Control (GIT)</p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
