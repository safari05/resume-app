"use client"
import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ROUTES } from "@/utils/data";
import Link from "next/link";
import { cn } from "@/utils/classNames";

interface MobMenuProps {
pathname: string;
}

export default function MobMenu({ pathname} :MobMenuProps) {
   const[open, setOpen] = React.useState(false);
   const handleOpen = ()=> setOpen(!open);

   React.useEffect(()=>{
    setOpen(false);     
   }, [pathname]);

  return (
    <Drawer open={open}>
      <DrawerTrigger asChild className="md:hidden" onClick={handleOpen}>
        <Button variant={"outline"}>
          <Menu />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-teal-100 ">
        <div className="max-w-sm mx-auto w-full">
            <DrawerHeader className="list-none space-y-6">
            {ROUTES.map((route) => (
            <li key={route.id}>
              <Link
                href={route.path}
                className={cn(
                  "hover:text-yellow-400",
                  pathname === route.path && "text-primary"
                )}
              >
                {route.name}
              </Link>
            </li>
          ))}
            </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
