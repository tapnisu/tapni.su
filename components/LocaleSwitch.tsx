import { useRouter } from "next/router";

export default function LocaleSwitch(
  props: React.HTMLAttributes<HTMLSelectElement>
) {
  const router = useRouter();

  return (
    <select
      name="locale"
      value={router.locale}
      onChange={(e) => router.push("", "", { locale: e.target.value })}
      {...props}
    >
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
}
