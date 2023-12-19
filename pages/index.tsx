import BasePageLayout from "@components/basePageLayout";
import { en, ru } from "@locales/index";
import avatar from "@public/avatar.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          src={avatar}
          width={1024}
          height={1024}
          alt="Picture of the author"
          style={{
            width: "100%",
            maxWidth: "256px",
            height: "auto",
            borderRadius: "50%",
          }}
          priority
          placeholder="blur"
        />

        <h1 className="text-center">
          {t.index.ohHiIam} <u>{t.name}</u> aka <u>{t.username}</u>
        </h1>

        <p>
          {" "}
          {t.index.about} Rust {t.index.and} Typescript
        </p>

        <Link href="/contact" className="gap-half">
          <button>{t.contact}</button>
        </Link>
      </div>
    </BasePageLayout>
  );
}
