import { useTranslation } from "react-i18next";
import "./running-nijika.css";

export function RunningNijika() {
  const { t } = useTranslation();

  return (
    <img
      src="/running-nijika.gif"
      className="running-nijika"
      alt={t("running-nijika")}
    />
  );
}
