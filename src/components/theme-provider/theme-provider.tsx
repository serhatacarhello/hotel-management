"use client";

import ThemeContext from "@/context/theme-context";
import { PropsWithChildren, useEffect, useState } from "react";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const themeFromStorage: boolean =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState<boolean>(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  const values = {
    darkTheme,
    setDarkTheme,
  };

  return (
    <ThemeContext.Provider value={values}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
