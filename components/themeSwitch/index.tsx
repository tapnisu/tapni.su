import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMobile, FaMoon, FaSun } from "react-icons/fa";
import styles from "./themeSwitch.module.css";

function switchTheme(theme?: string) {
  switch (theme) {
    case "system":
      return "dark";

    case "dark":
      return "light";

    default:
      return "system";
  }
}

function themeIcon(theme?: string) {
  switch (theme) {
    case "light":
      return <FaSun />;

    case "dark":
      return <FaMoon />;

    default:
      return <FaMobile />;
  }
}

export default function ThemeSwitch(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.themeSwitch} ${props.className}`}
      onClick={() => setTheme(switchTheme(theme))}
      {...props}
    >
      {themeIcon(theme)}
    </div>
  );
}
