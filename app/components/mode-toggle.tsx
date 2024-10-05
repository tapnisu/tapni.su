import { Theme, useTheme } from "remix-themes";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export function ModeToggle(props: React.HTMLAttributes<HTMLSelectElement>) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <select
      name="theme"
      aria-label="theme"
      value={theme!}
      onChange={(e) => setTheme(e.target.value as Theme)}
      {...props}
    >
      <option value={Theme.LIGHT}>{t("theme.light")}</option>
      <option value={Theme.DARK}>{t("theme.dark")}</option>
    </select>
  );
}
