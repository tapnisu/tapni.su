import Link from "next/link";

export interface ErrorProps {
  status: number | null | undefined;
}

export default function Error(props: ErrorProps) {
  return (
    <div className="container-center">
      <h1>
        {props.status == 404
          ? "404 Not found :("
          : props.status || "Unkown error"}
      </h1>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
