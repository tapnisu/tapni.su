import BasePageLayout from "@components/basePageLayout";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";

interface buttonLink {
  value: string;
  href: string;
}

export default function HomePage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout>
      <div className="container-center">
        <h1 className="text-center">{t.index.ohHi(t.name)}</h1>

        <Link href="/contact" className="gap-half">
          <button>{t.contact}</button>
        </Link>
      </div>
    </BasePageLayout>
  );
}
