import { NextPageContext } from "next";

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const status = res ? res.statusCode : err ? err.statusCode : null;

  return status;
};

export default function Error({
  status,
}: {
  status: number | null | undefined;
}) {
  return <Error status={status} />;
}
