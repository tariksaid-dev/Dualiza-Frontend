import Sun from "@/components/icons/Sun";
import Moon from "@/components/icons/Moon";

import { Button } from "@/components/ui/button";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  function handleClick() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    } 
  }

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 transition-all" />
      )}
    </Button>
  );
}
