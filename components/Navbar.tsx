import Link from "next/link";

const Navbar = () => (
	<nav className="sticky top-0 flex justify-center w-full">
		<div className="bg-neutral-100 dark:bg-neutral-900 dark:text-white rounded-full m-2 border-2 border-neutral-200 dark:border-neutral-800">
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
							className="hover:text-indigo-400 transition-colors"
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
