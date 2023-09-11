import BasePageLayout from "@components/basePageLayout";
import Error from "@components/Error";

export default function NotFoundPage() {
  return (
    <BasePageLayout>
      <Error status={404} />
    </BasePageLayout>
  );
}
