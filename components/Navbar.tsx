import Link from "next/link";

const paths = [
	{ name: "Home", url: "/" },
	{
		name: "Projects",
		url: "/projects"
	},
	{ name: "Setup", url: "/setup" }
];

const Navbar = () => (
	<nav className="sticky top-0 flex font-semibold justify-center md:justify-normal w-full text-accent-600 bg-main-50/75 dark:bg-main-950/75 backdrop-blur-sm p-2">
		<ul>
			{paths?.map((info: { name: string; url: string }) => (
				<li
					className="inline-block py-2 rounded-full hover:bg-accent-600 hover:text-main-100 transition"
					key={info.name}
				>
					<Link className="p-2 px-4" href={info.url}>
						{info.name}
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default Navbar;
