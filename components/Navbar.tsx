import Link from "next/link";

const Navbar = () => (
	<nav className="sticky top-0 flex justify-center w-full">
		<div className="text-accent-700 dark:text-accent-500 bg-main-50/75 dark:bg-main-950/75 backdrop-blur-sm rounded-full m-2">
			<ul>
				{[
					{ name: "Home", url: "/" },
					{
						name: "Projects",
						url: "/projects"
					},
					{ name: "Setup", url: "/setup" }
				]?.map((info: { name: string; url: string }) => (
					<li
						className="inline-block py-2 rounded-full hover:bg-accent-700 hover:text-main-100 transition"
						key={info.name}
					>
						<Link className="p-2 px-4" href={info.url}>
							{info.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	</nav>
);

export default Navbar;
