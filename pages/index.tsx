import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";

const HomePage = () => {
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
};

export default HomePage;
