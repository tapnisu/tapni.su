import BasePageLayout from "@components/basePageLayout";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout>
      <div className="text-center">
        <h1>
          {t.index.ohHiIam} <span className="color-accent">{t.name}</span>!
        </h1>
        <p>
          {t.index.alsoKnownAs}{" "}
          <span className="color-accent">{t.username}</span>
        </p>

        <Link href="/contact" className="gap-half">
          <button>{t.contact}</button>
        </Link>
      </div>
    </BasePageLayout>
  );
}
