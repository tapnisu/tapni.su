import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMobile, FaMoon, FaSun } from "react-icons/fa";
import styles from "./themeSwitch.module.css";

function switchTheme(theme: string | undefined): string {
  switch (theme) {
    case "system":
      return "dark";

    case "dark":
      return "light";

    default:
      return "system";
  }
}

function themeIcon(theme: string | undefined) {
  switch (theme) {
    case "light":
      return <FaSun />;

    case "dark":
      return <FaMoon />;

    default:
      return <FaMobile />;
  }
}

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={styles.themeSwitch}
      onClick={() => setTheme(switchTheme(theme))}
    >
      {themeIcon(theme)}
    </div>
  );
}
