import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";

const HomePage = () => {
  return (
    <BasePageLayout>
      <div className="flex flex-col flex-wrap justify-center items-center">
        <div className="flex flex-col flex-wrap items-center justify-center p-2 h-full">
          <h1 className="text-3xl font-bold">
            Oh, hi! I am <span className="text-accent-600">tapnisu</span>!
          </h1>

          <div className="m-4">
            <Link href="/contact">
              <button>Contact me</button>
            </Link>
          </div>
        </div>
      </div>
    </BasePageLayout>
  );
};

export default HomePage;
