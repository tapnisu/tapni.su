import BasePageLayout from "@components/basePageLayout";
import Link from "next/link";

interface buttonLink {
  value: string;
  href: string;
}

const buttonLinks: buttonLink[] = [{ value: "Contact", href: "/contact" }];

export default function HomePage() {
  return (
    <BasePageLayout>
      <div className="container-center">
        <h1 className="text-center">
          Oh, hi! I am <span className="color-accent">Aleksei Rybin</span>!
        </h1>

        <span>
          {buttonLinks.map((buttonLink) => (
            <Link
              href={buttonLink.href}
              key={buttonLink.value}
              className="gap-half"
            >
              <button>{buttonLink.value}</button>
            </Link>
          ))}
        </span>
      </div>
    </BasePageLayout>
  );
}
