import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { transition, variants } from "@/utils/framerVariant";
import {
  MotionButton,
  MotionDiv,
  MotionImage,
  MotionTab,
} from "@/utils/motionTags";
import React from "react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto pt-28 2xl:pt-40">
      <div className="flex md:flex-row flex-col items-center justify-between gap-7 md:gap-0 w-full">
        <div
          className="flex md:flex-row flex-col gap-x-7 
        sm:gap-y-0 gap-y-7 items-center justify-center"
        >
          <MotionImage
            initial="initial"
            animate="animate"
            variants={variants.scale}
            transition={transition.scale}
            src={"/assets/images/eri-profile.png"}
            width={155}
            height={155}
            alt="profile-eri"
            className="md:w-36 w-28 "
          />

          <MotionDiv
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={variants.moveDown}
            className="sm:text-left text-center"
          >
            <h3>
              {" "}
              Eri <span>Safari</span>
            </h3>
            <h5> Indonesia West Java</h5>
          </MotionDiv>
        </div>
        <MotionButton
          initial="initial"
          animate="animate"
          variants={variants.moveDown}
          transition={transition.moveDown}
          variant={"outline"}
          size={"lg"}
        >
          <span className="text-white">Web Developer</span>
        </MotionButton>
      </div>

      <MotionTab
        initial="initial"
        animate="animate"
        variants={variants.moveUp}
        transition={transition.moveUp}
        className="leading-7 mt-10 mb-7"
        defaultValue="about"
      >
        <TabsList>
          <TabsTrigger className="text-white" value="about">
            About
          </TabsTrigger>
          <TabsTrigger className="text-white" value="skills">
            Skills
          </TabsTrigger>
          
        </TabsList>

        <TabsContent value="about">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                About Me
              </h4>

              <p className="font-medium text-secondary max-w-full">
                I graduated from Padjadjaran University with an Associate Degree
                in Informatics Management. I have a strong passion for
                programming and started by learning the basics to mastering C#.
                Over the past two years, I have focused more deeply on{" "}
                <span className="font-bold text-primary">
                  Front-End development{" "}
                </span>
                technologies, including{" "}
                <span className="font-bold text-primary">
                  React (Gatsby, Next.js), and Vanilla JavaScript
                </span>
                .
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-bold text-primary mb-4 text-2xl">
                References
              </h3>
              <p className="font-medium text-slate-400 lg:text-lg lg:mb-5">
                For reference, you can find my contact details and links to my
                professional profiles below. These references include:
              </p>
              <div className="flex flex-col">
                <div className="flex items-center mb-4 lg:mb-2">
                  <Link
                    href="mailto:safari.erie@gmail.com"
                    className="w-9 h-9 mr-3 rounded-full border border-white hover:bg-primary hover:text-white flex items-center justify-center"
                  >
                    <svg
                      role="img"
                      className="fill-current"
                      width="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Gmail</title>
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </Link>
                  <span className="font-medium text-white">
                    safari.erie@gmail.com
                  </span>
                </div>

                <div className="flex items-center mb-4 lg:mb-2">
                  <Link
                    href="https://github.com/safari05"
                    target="_blank"
                    className="w-9 h-9 mr-3 rounded-full border border-white hover:bg-primary hover:text-white flex items-center justify-center"
                  >
                    <svg
                      role="img"
                      width="20"
                      className="fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </Link>
                  <span className="font-medium text-white">
                    github:safari05
                  </span>
                </div>

                <div className="flex items-center">
                  <Link
                    href="https://gitlab.com/safari.erie"
                    target="_blank"
                    className="w-9 h-9 mr-3 rounded-full border border-white hover:bg-primary hover:text-white flex items-center justify-center"
                  >
                    <svg
                      role="img"
                      width="20"
                      className="fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitLab</title>
                      <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
                    </svg>
                  </Link>
                  <span className="font-medium text-white">
                    gitlab:safari.erie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="skills">
          <div className="my-auto flex flex-col gap-3">
              <h3 className="text-primary font-medium"> Better Experience </h3>
              <p className="text-gray-300">As a web developer, I possess the following skills : </p>
              <h2 className="text-gray-400 font-medium"> HTML </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-full bg-indigo-400  h-1.5 rounded-md"></div>
              </div>
              <h2 className="text-gray-400 font-medium"> Css</h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-3/5 bg-indigo-400 h-1.5 rounded-md"></div>
              </div>
              <h2 className="text-gray-400 font-medium"> Javascript </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-5/6 bg-indigo-400 h-1.5 rounded-md"></div>
              </div>
              <h2 className="text-gray-400 font-medium"> React.js <span className="text-primary">(Next.js)</span> </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-4/5 bg-indigo-400 h-1.5 rounded-md"></div>
              </div>
              <h2 className="text-gray-400 font-medium"> AnggularJs <span className="text-primary">(Next.js)</span> </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-3/4 bg-indigo-400 h-1.5 rounded-md"></div>
              </div>
              <h2 className="text-gray-400 font-medium"> .Net <span className="text-primary">(C#)</span> </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-[70%]  bg-indigo-400 h-1.5 rounded-md"></div>
              </div>
              <h2 className="text-gray-400 font-medium"> PHP <span className="text-primary">(Laravel Framework)</span> </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-3/4 bg-indigo-400 h-1.5 rounded-md"></div>
              </div>
              <h2 className="text-gray-400 font-medium"> SQL Server </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-3/6 bg-indigo-400 h-1.5 rounded-md"></div>
              </div>

              <h2 className="text-gray-400 font-medium"> PostgreSQL  </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-3/4 bg-indigo-400 h-1.5 rounded-md"></div>
              </div>

              <h2 className="text-gray-400 font-medium"> Version Control System <span className="text-primary"> GIT </span>  </h2>
              <div className="w-full bg-gray-200 h-1.5 rounded-md">
                  <div className="w-5/6 bg-indigo-400 h-1.5 rounded-md"></div>
              </div>
              
          </div>
        </TabsContent>
       
      </MotionTab>
    </div>
  );
}
