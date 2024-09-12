"use client";
import { cn } from "@/utils/classNames";
import { ROUTES } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logoImg from "../../../../public/assets/images/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MobMenu from "./mobMenu";
import { MotionImage, MotionList } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framerVariant";
export default function Menu() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header
      className={cn(
        "fixed z-50 left-0 right-0 bg-blue-200",
        pathname !== "/"
      )}
    >
      <nav className="container py-4 flex justify-between items-center">
      <Link className="font-bold text-lg text-primary" href={"/"}>
      <MotionImage
        initial="initial"
        animate="animate"
        variants={variants.scale} 
        transition={transition.scale} 
        src={logoImg}
        alt="my logo"
        width={50} 
        height={50}
      />
    </Link>
        <ul className="items-center md:flex hidden text-[17px] gap-6 font-medium">
          {ROUTES.map((route, i) => (
            <MotionList 
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={{
              ...transition.moveDown,
              delay: 0.3 * i,
            }}
            key={route.id}>
              <Link
                href={route.path}
                className={cn(
                  "hover:text-primary",
                  pathname === route.path && "text-primary"
                )}
              >
                {route.name}
              </Link>
            </MotionList>
          ))}
        </ul>
        <MobMenu pathname={pathname}/>
      </nav>
    </header>
  );
}
