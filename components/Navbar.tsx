import Link from "next/link";

const Navbar = () => (
	<nav className="sticky top-0 flex justify-center w-full">
		<div className="bg-main-100 dark:bg-main-900 dark:text-main-100 rounded-full m-2 border-2 border-main-200 dark:border-main-800">
			<ul className="mx-2">
				{[
					{ name: "Home", url: "/" },
					{
						name: "Projects",
						url: "/projects"
					},
					{ name: "Setup", url: "/setup" }
				]?.map((info: { name: string; url: string }) => (
					<li className="inline-block m-2" key={info.name}>
						<Link
							href={info.url}
							className="hover:text-main-400 transition-colors"
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
