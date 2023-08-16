import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";

export default function HomePage() {
  return (
    <BasePageLayout>
      <div className="container-center">
        <h1>
          Oh, hi! I am <span className="color-accent">tapnisu</span>!
        </h1>

        <Link href="/contact">
          <button>Contact me</button>
        </Link>
      </div>
    </BasePageLayout>
  );
}
