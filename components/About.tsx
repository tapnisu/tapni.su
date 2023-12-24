import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div>
      <h2 className="text-center">{t.aboutTitle}</h2>
      <p className="text-justify">{t.aboutText}</p>
    </div>
  );
}
