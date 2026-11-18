"use client";
import { SquareLibrary, Menu } from "lucide-react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "../../components/ui/button";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState("light");

  const setTheme = () => {
    const savedTheme = localStorage.getItem("theme") ?? "light";
    setDark(savedTheme);
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const updateDarkMode = () => {
    if (dark === "light") {
      setDark("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (dark === "dark") {
      setDark("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    setTheme();
  });
  return (
    <nav className="font-[Space_grotesk] z-50 sticky top-0 bg-white dark:bg-[#0D1117] dark:text-white text-black flex flex-row items-center py-4 px-4 lg:px-16 md:px-16 border">
      <div className="text-xl flex flex-row items-center gap-1 font-semibold">
        <SquareLibrary />
        <h1 className="dark:text-white font-medium text-sm lg:text-lg text-black">
          FRONTPAGE
        </h1>
      </div>
      <div className="ms-auto items-center font-[Geist] text-xl gap-2 flex flex-row">
        {dark == "light" ? (
          <button
            onClick={updateDarkMode}
            className="hover:cursor-pointer border-none"
          >
            <IconMoon />
          </button>
        ) : (
          <button
            id="theme"
            onClick={updateDarkMode}
            className="hover:cursor-pointer border-none"
          >
            <IconSun />
          </button>
        )}
        <Button
          id="login"
          variant="link"
          className="hover:cursor-pointer underline"
        >
          Log in
        </Button>
        <Button id="signup" className="rounded-full px-3 hover:cursor-pointer">
          Sign up
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
