import clsx from "clsx";
import { useTranslation } from "react-i18next";

import "./footer.css";

export function Footer(props: React.HTMLAttributes<HTMLDivElement>) {
  const { t } = useTranslation();

  return (
    <footer className={clsx("footer", props.className)} {...props}>
      <a href="https://github.com/tapnisu/tapni.su">{t("footer.sourceCode")}</a>
    </footer>
  );
}
