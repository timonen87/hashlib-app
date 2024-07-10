"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/shared/ui/button";

import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      variant="ghost"
      size="icon"
    >
      {theme == "light" ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  );
}
