import BasePageLayout from "@components/basePageLayout";
import { en, ru } from "@locales/index";
import avatarImage from "@public/avatar.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout>
      <div className="text-center">
        <Image
          src={avatarImage}
          width={288}
          alt="Avatar"
          style={{
            borderRadius: "9999px",
            width: "100%",
            maxWidth: "18rem",
            height: "auto",
          }}
          placeholder="blur"
          priority
        />
        <h1>
          {t.index.ohHiIam} <u>{t.name}</u>!
        </h1>
        <p>
          {t.index.alsoKnownAs} <u>{t.username}</u>
        </p>

        <Link href="/contact" className="gap-half">
          <button>{t.contact}</button>
        </Link>
      </div>
    </BasePageLayout>
  );
}
