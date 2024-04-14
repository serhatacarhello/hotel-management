"use client";
import useTheme from "@/context/useTheme";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function DarkMode() {
  const { darkTheme, setDarkTheme } = useTheme();
  return (
    <>
      {darkTheme ? (
        <MdOutlineLightMode
          className="cursor-pointer"
          onClick={() => {
            setDarkTheme(false);
            localStorage.removeItem("hotel-theme");
          }}
        />
      ) : (
        <MdDarkMode
          className="cursor-pointer"
          onClick={() => {
            setDarkTheme(true);
            localStorage.setItem("hotel-theme", "true");
          }}
        />
      )}
    </>
  );
}
