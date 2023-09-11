import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";

export interface ErrorProps {
  status: number | null | undefined;
}

export default function Error(props: ErrorProps) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <>
      <h1>
        {props.status == 404
          ? t.error.error404
          : props.status || t.error.unknown}
      </h1>
      <Link href="/">
        <button>{t.home}</button>
      </Link>
    </>
  );
}
