"use client";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PROJECTS } from "@/utils/data";
import { transition, variants } from "@/utils/framerVariant";
import { MotionDiv } from "@/utils/motionTags";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { cn } from "@/lib/utils";
import "swiper/css";

type SlideChangeItem = {
  activeIndex: number;
};

export default function ProjectPage() {
  const [currentProject, setCurrentProject] = useState(PROJECTS[0]);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  //const [swipper, setSwiper] = useState(null);

  const onSlideChange = (item: SlideChangeItem) => {
    setCurrentProject(PROJECTS[item?.activeIndex]);
  };

  const index =
    PROJECTS.findIndex((project) => project.title === currentProject.title) + 1;

  const nextTo = () => {
    swiper?.slideNext();
  };

  const prev = () => {
    swiper?.slidePrev();
  };
  return (
    <div className="grid place-items-center lg:pt-30 sm:pt-32 pt-36 container">
      <div className="mt-12">
        <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          className="text-center mb-10"
        >
          <h3>
            My <span>Projects</span>
          </h3>
        </MotionDiv>

        <MotionDiv initial="initial" animate="animate">
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center gap-4">
              <div className="w-full lg:w-1/4 ">
                <Image
                  src={project.image}
                  alt={project.title}
                width={500}
                  height={500}
                  className="rounded mb-6"
                ></Image>
              </div>
              <div className="w-full max-w-xl lg:w-3/4 mb-5">
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                <p className="mb-4">{project.desc}</p>
                <div className="mt-2 text-primary font-semibold tracking-wider space-x-2">
                  {project?.stack?.map((item, ii) => {
                    return (
                      <Badge
                        key={ii}
                        variant="outline"
                        className="text-primary text-base"
                      >
                        {item}
                      </Badge>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-x-2">
                <TooltipProvider delayDuration={200}>
                 
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-wrap">
                        <Link
                          href={project.link_git}
                          target="_blank"
                          className="bg-accent p-2.5 rounded-full flex items-center justify-between w-full max-w-xs"
                        >
                          <Image
                            src={"/assets/images/GitHub.svg"}
                            alt="git"
                            width={20}
                            height={20}
                          />
                          <h4><span className="ml-2 font-semibold text-accent-foreground mr-2">Git Repository</span></h4>
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Git Repository</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-wrap">
                        <Link
                          href={project.link_git}
                          target="_blank"
                          className="bg-accent p-2.5 rounded-full flex items-center justify-between w-full max-w-xs"
                        >
                          <Image
                            src={"/assets/images/open.svg"}
                            alt="live preview"
                            width={20}
                            height={20}
                          />
                          <h4><span className="ml-2 font-semibold text-accent-foreground mr-2">Live Priview</span></h4>
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Preview</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </MotionDiv>

        {/* <MotionDiv
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transition.moveDown}
          className='flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 items-start w-full'
         >
          <div className='flex-1 space-y-2'>
              <h2 className='text-6xl font-semibold text-primary'> {index < 10 ? `0${index}` : index}</h2>
              <h3> {currentProject.title}</h3>
              <p className='w-10/12 text-accent font-semibold'> 
              {
                currentProject?.desc
              }
              </p>
              <div className='mt-2 text-primary font-semibold tracking-wider space-x-2'>
                {
                  currentProject?.stack?.map((item, ii) =>{
                    return (
                      <Badge 
                        key={ii}
                        variant="outline" className='text-primary text-base'>
                        {item}
                    </Badge>
                    )
                  })
                }
              </div>
              <br/>
              <div className='flex gap-x-3'>
                <TooltipProvider delayDuration={200} >
                    <Tooltip>
                      <TooltipTrigger asChild>
                          <button className='bg-accent p-2.5 rounded-full'>
                            <Image src={'/assets/images/GitHub.svg'} alt='github' width={40} height={40} />
                          </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                          <Link href={currentProject?.link} target='_blank' className='bg-accent p-2.5 rounded-full'>
                            <Image src={'/assets/images/open.svg'} alt='live preview' width={40} height={40} />
                          </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Preview</p>
                      </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
              </div>
          </div>

          <div className="flex-1 flex items-center flex-col">
            <Swiper 
            breakpoints={{
              499 :{
                slidesPerView: 1
              },
              999 :{
                slidesPerView:  1.4 
              }
            }}
            spaceBetween={20}
            className='w-full md:max-w-lg max-w-[250px]'
            onSlideChange={onSlideChange}
            onSwiper={(s) => setSwiper(s)}
            >
                 {PROJECTS.map((project, idx) => (
                    <SwiperSlide key={project.id} 
                    className={cn(index - 1 !== idx && "opacity-45", "")}
                      >
                        <Image src={project.image} 
                        alt={project.title} 
                        width={500} height={500} 
                        className='object-contain'/>

                    </SwiperSlide>
                  ))}
            </Swiper>

            <div className="flex ml-6 mt-4 gap-x-4">
              <button onClick={prev} disabled={index === 1}>
                <Image
                  src={"/prev.png"}
                  alt={"prev"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
              <button onClick={nextTo} disabled={index === PROJECTS.length}>
                <Image
                  src={"/next.png"}
                  alt={"next"}
                  width={55}
                  height={55}
                  className={cn("cursor-pointer")}
                />
              </button>
            </div>
          </div>
          
         </MotionDiv> */}
      </div>
    </div>
  );
}
