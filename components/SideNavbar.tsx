"use client";

import { useState, useEffect } from "react";
import { Nav } from "./ui/nav2";
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
    <>
      {mobileWidth ? (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex flex-col items-center py-2">
            <Nav
              isCollapsed={false}
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
      ) : (
        <div className="h-screen flex flex-col">
          <div>
            <div className="px-3 pt-5">
              <Nav
                isCollapsed={true}
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
                    href: "/user",
                    icon: UsersRound,
                    variant: "ghost",
                  },
                  {
                    title: "Products",
                    href: "/product",
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
        </div>
      )}
    </>
  );
}
