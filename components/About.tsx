import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div className="text-center">
      <h2>{t.aboutTitle}</h2>
      <p>{t.aboutText}</p>
    </div>
  );
}
