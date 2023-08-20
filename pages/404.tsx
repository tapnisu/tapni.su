import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <BasePageLayout>
      <div className="container-center">
        <h1>404 Not found :C</h1>

        <Link href="/">
          <button>Home</button>
        </Link>
      </div>
    </BasePageLayout>
  );
}
