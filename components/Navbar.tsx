import Link from "next/link";

const paths = [
  { name: "Home", url: "/" },
  {
    name: "Projects",
    url: "/projects",
  },
  { name: "Setup", url: "/setup" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 font-semibold flex flex-wrap justify-around w-full text-accent-600 bg-main-50/75 dark:bg-main-950/75 backdrop-blur-sm p-2">
      <div className="py-2 rounded-full transition hidden md:inline-block">
        <div className="px-4">Alexiy Rybin</div>
      </div>
      <div>
        {paths?.map((info: { name: string; url: string }) => (
          <div
            className="inline-block py-2 rounded-full hover:bg-accent-600 hover:text-main-100 transition"
            key={info.name}
          >
            <Link className="p-2 px-4" href={info.url}>
              {info.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
