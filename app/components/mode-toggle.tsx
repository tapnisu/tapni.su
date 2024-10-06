import { Theme, useTheme } from "remix-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

import "./mode-toggle.css";

export function ModeToggle(props: React.HTMLAttributes<HTMLButtonElement>) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={(e) => {
        setTheme(theme == Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
        props.onClick?.(e);
      }}
      className={clsx("mode-toggle", props.className)}
      {...props}
    >
      {theme == Theme.LIGHT ? (
        <Sun style={{ height: "100%" }} />
      ) : (
        <Moon style={{ height: "100%" }} />
      )}
    </button>
  );
}
