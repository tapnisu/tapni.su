import { en, ru } from "@locales/index";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ThemeSwitch(
  props: React.HTMLAttributes<HTMLSelectElement>
) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <select
      name="theme"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      {...props}
    >
      <option value="system">{t.themes.system}</option>
      <option value="light">{t.themes.light}</option>
      <option value="dark">{t.themes.dark}</option>
    </select>
  );
}
