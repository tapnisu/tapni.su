import Link from "next/link";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export interface ErrorProps {
  status: number | null | undefined;
}

export default function Error(props: ErrorProps) {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <div className="container-center">
      <h1>{props.status}</h1>
      <h2 className="text-center">
        {props.status == 404
          ? t.error.error404
          : props.status || t.error.unknown}
      </h2>
      <Link href="/">
        <button>{t.home}</button>
      </Link>
    </div>
  );
}
