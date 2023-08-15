import Link from "next/link";

const paths = [
  { name: "Home", url: "/" },
  {
    name: "Projects",
    url: "/projects",
  },
  { name: "Setup", url: "/setup" },
  { name: "Contact", url: "/contact" },
];

export default function Footer() {
  return (
    <footer className="text-main-800 dark:text-main-400 p-8">
      <div className="mx-auto w-24 h-1 my-12 bg-main-800 dark:bg-main-400 rounded-full"></div>

      <div className="flex flex-row flex-wrap items-center justify-around">
        <div className="flex flex-row flex-wrap">
          {paths?.map((info: { name: string; url: string }) => (
            <Link
              href={info.url}
              className="underline underline-offset-4 hover:text-accent-600 transition-colors m-2"
              key={info.name}
            >
              {info.name}
            </Link>
          ))}
        </div>

        <p className="p-4">Made by Alexiy Rybin</p>
      </div>
    </footer>
  );
}
