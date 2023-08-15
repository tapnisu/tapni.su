import Link from "next/link";
import styles from "./navbar.module.css";

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
    <nav className={styles.navbar}>
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
