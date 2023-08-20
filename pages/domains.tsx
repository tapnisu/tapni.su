import BasePageLayout from "@components/basePageLayout";
import domains from "@data/domains.json";
import Link from "next/link";

export default function DomainsPage() {
  return (
    <BasePageLayout
      title="Tapnisu - Domains"
      description="15 years old developer from Russia"
    >
      <h1>My domains</h1>
      <ul>
        {domains.map((domain) => (
          <li key={domain}>
            <Link href={`https://${domain}/`}>{domain}</Link>
          </li>
        ))}
      </ul>
      Other domains are secret for now ^_^
    </BasePageLayout>
  );
}
