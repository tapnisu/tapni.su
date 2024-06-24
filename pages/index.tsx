import BasePageLayout from "@components/basePageLayout";
import Introduction from "@components/introduction";
import Projects from "@components/projects";
import { en, ru } from "@locales/index";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ru;

  return (
    <BasePageLayout>
      <Introduction />
      <div>
        <h2>
          <Link href="/projects">{t.projectsTitle}</Link>
        </h2>
        <Projects amount={2} />
      </div>
      <div>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
      </div>
      <div>
        <h2>{t.donate}</h2>
        <p>{t.donateDescription}</p>
        <ul>
          <li>
            {t.bank}
            <ul>
              <li>
                <Link href="https://www.tinkoff.ru/cf/7aqoWFFtbYJ">
                  Tinkoff
                </Link>
              </li>
            </ul>
          </li>
          <li>
            {t.crypto}
            <ul>
              <li>
                <p>
                  <Link href="https://t.me/send?start=IV0Fabrrj5rn">
                    Crypto bot
                  </Link>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </BasePageLayout>
  );
}
