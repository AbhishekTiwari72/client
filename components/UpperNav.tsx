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
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  const [data, setData] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State to store search query
  const [searchSuggestions, setSearchSuggestions] = useState<any[]>([]); // State to store search suggestions

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        await setData(user);
      }
    };
    fetchData();
  }, [user]);

  // Function to handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);

    // Call search API to fetch suggestions
    fetchSuggestions(value);
  };

  const fetchSuggestions = async (keyword: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }
      const data = await response.json();
      console.log("API Response:", data); // Log API response to inspect its structure

      // Ensure users and pages are handled properly
      const combinedSuggestions = [
        ...(data.users || []).map((user: any) => ({
          ...user,
          type: "user",
          url: `/user/${user._id}`,
        })),
        ...(data.pages || []),
      ];

      setSearchSuggestions(combinedSuggestions); // Set combined suggestions

      // Log search result for debugging purposes
      console.log("Search result:", combinedSuggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSearchSuggestions([]); // Handle error by setting suggestions to empty array
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    // Optionally redirect to home or login page after logout
  };

  const handleSearchSuggestionSelect = (suggestion: any) => {
    console.log("Navigating to", suggestion); // Example navigation log

    router.push(suggestion.url);
  };

  return (
    <nav className={`${containerStyles}`}>
      <form className="mx-auto">
        <Input
          type="text"
          id="search"
          autoComplete="off"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border-b-2 border-gray-300 h-[50px] focus:border-blue-500 bg-white rounded-md p-2"
        />
        {searchSuggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-10">
            {searchSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="cursor-pointer py-1 px-2 hover:bg-gray-100"
                onClick={() => handleSearchSuggestionSelect(suggestion)}
              >
                {suggestion.title} {" "}
                {suggestion.firstName} {suggestion.lastName}
              </li>
            ))}
          </ul>
        )}
      </form>

      {isAuthenticated ? (
        <div className="uppercase">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`inline-block ${linkStyles} rounded-full bg-blue-200 p-2 cursor-pointer`}
            >
              {data?.firstName?.charAt(0).toUpperCase()}
              {data?.lastName?.charAt(0).toUpperCase()}
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
