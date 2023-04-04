import Link from "next/link";

const Navbar = () => (
	<nav className="sticky top-0 flex justify-center w-full">
		<div className="text-main-900 bg-main-100 dark:bg-main-800 dark:text-main-50 rounded-full m-2 shadow">
			<ul className="mx-2">
				{[
					{ name: "Home", url: "/" },
					{
						name: "Projects",
						url: "/#projects"
					},
					{ name: "Setup", url: "/setup" }
				]?.map((info: { name: string; url: string }) => (
					<li className="inline-block m-2" key={info.name}>
						<Link
							href={info.url}
							className="hover:text-accent-600 dark:hover:text-accent-500 transition-colors"
						>
							{info.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	</nav>
);

export default Navbar;
