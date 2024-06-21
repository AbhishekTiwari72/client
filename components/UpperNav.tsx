import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store"; // Adjust the import based on your store configuration
import { logout } from "../redux/loginSlice"; // Adjust the import based on your slice file location
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

const links = [{ path: "/", name: "home" }];

interface User {
  firstName: string | null;
  lastName: string | null;
  role?: string | null;
}

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.login
  );

  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        await setData(user);
      }
    };
    fetchData(); // Call the async function immediately
  }, [user]);

  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  const firstNameInitial = data?.firstName
    ? data.firstName.charAt(0).toUpperCase()
    : "";
  const lastNameInitial = data?.lastName
    ? data.lastName.charAt(0).toUpperCase()
    : "";

  console.log(data, "User");

  const handleLogout = () => {
    dispatch(logout());
    // Optionally redirect to home or login page after logout
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${containerStyles}`}>
      {/* {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`uppercase ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))} */}

      <form className="mx-auto">

          {" "}
            <Input type="name" id="firstname" autoComplete="off" placeholder="Search.........." />

      </form>
      {isAuthenticated ? (
        <div className="uppercase">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`inline-block ${linkStyles} rounded-full bg-blue-200 p-2 cursor-pointer`}
            >
              {firstNameInitial}
              {lastNameInitial}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel
                onClick={handleLogout}
                className={`uppercase ${linkStyles}`}
              >
                Logout {data?.role}
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link href="/login" className={`uppercase ${linkStyles}`}>
          Login
        </Link>
      )}
    </nav>
  );
};

export default Nav;
