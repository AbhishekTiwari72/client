/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import Logo from "./Logo";
import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  CircleUserRound,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative px-3 pt-5">
      <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
        {!mobileWidth && (
          <div className="flex flex-row items-center justify-center absolute right-[-20px] top-5 space-x-2">
          {/* {!isCollapsed && <Logo />} */}
          <Logo />
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2 bg-orange-600 hover:bg-tertiary text-white"
          >
            <ChevronRight />
          </Button>
        </div>

        )}
        <Nav
          isCollapsed={mobileWidth ? true : isCollapsed}
          links={[
            {
              title: "Profile",
              href: "/profile",
              icon: CircleUserRound,
              variant: "default",
            },
            {
              title: "Dashboard",
              href: "/dashboard",
              icon: LayoutDashboard,
              variant: "ghost",
            },
            {
              title: "Users",
              href: "/users",
              icon: UsersRound,
              variant: "ghost",
            },
            {
              title: "Orders",
              href: "/orders",
              icon: ShoppingCart,
              variant: "ghost",
            },
            {
              title: "Settings",
              href: "/settings",
              icon: Settings,
              variant: "ghost",
            },
          ]}
        />
      </div>
    </div>
  );
}
