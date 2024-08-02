"use client";

import { useTheme } from "next-themes";

import { Button } from "@/shared/ui/button";

import { Loader2, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import IconComponent, { ForwardedIconComponent } from "./generic-icon";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);

  useLayoutEffect(() => {
    setToggle(!toggle);
  }, [theme]);

  return (
    <>
      {/* <Suspense fallback={<Loader2 className="mx-auto animate-spin" />} /> */}
      <Button
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        variant="ghost"
        size="icon"
      >
        {" "}
        {toggle ? (
          <IconComponent name="MoonIcon" className="side-bar-button-size" />
        ) : (
          <IconComponent name="SunIcon" className="side-bar-button-size" />
        )}
        {/* {toggle && (
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        )}

        {!toggle && (
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        )} */}
      </Button>
    </>
  );
}
