import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";

import domains from "@data/domains.json";

import { en, ru } from "@locales/index";
import { useRouter } from "next/router";

export default function DomainsPage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout title={t.domains}>
      <h1>{t.domains}</h1>
      <ul>
        {domains.map((domain) => (
          <li key={domain}>
            <Link href={`https://${domain}/`}>{domain}</Link>
          </li>
        ))}
      </ul>
    </BasePageLayout>
  );
}
