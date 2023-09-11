import BasePageLayout from "@components/basePageLayout";
import Error from "@components/Error";
import { NextPageContext } from "next";

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
  const status = res ? res.statusCode : err ? err.statusCode : null;

  return status;
};

export default function ErrorPage({
  status,
}: {
  status: number | null | undefined;
}) {
  return (
    <BasePageLayout>
      <Error status={status} />
    </BasePageLayout>
  );
}
