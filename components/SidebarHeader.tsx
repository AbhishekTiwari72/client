"use client";

import React, { useEffect, useState } from "react";
import Themetoggler from "./Themetoggler";
import UpperNav from "./UpperNav";
import SidebarNavigationMobile from "./SidebarNavigationMobile";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";
import { Card } from "@/components/ui/card";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Card
      className={`${
        header
          ? "bg-tertiary shadow-lg dark:bg-accent mt-1 mb-1"
          : " dark:bg-transparent"
      } sticky top-0 z-30 mt-1 mb-1 transition-all ${
        pathname === "/" && "bg-gray-100"
      }`}
    >
      <header className="mb-1 mt-1">
        <div className="container mx-auto">
          <div className="xl:hidden">
            <SidebarNavigationMobile />
          </div>
          <div className="flex items-center gap-x-12 justify-end">
            <UpperNav
              containerStyles="hidden xl:flex gap-x-12 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            <Themetoggler />
            <div className="xl:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </header>
    </Card>
  );
};

export default Header;
