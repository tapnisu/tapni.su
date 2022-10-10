import Link from "next/link";

const NavBase = () => {
	return (
		<>
			<nav className="backdrop-blur-sm bg-black/30 w-full">
				<ul>
					<li className="inline-block m-4">
						<Link href="/" className="m-4">
							Home
						</Link>
					</li>
					<li className="inline m-4">
						<Link href="/projects" className="m-4">
							Projects
						</Link>
					</li>
					<li className="inline m-4">
						<Link href="/setup" className="m-4">
							Setup
						</Link>
					</li>
					<li className="inline m-4">
						<Link href="/blog" className="m-4">
							Blog
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

const Nav = () => {
	return (
		<>
			<div className="opacity-0 w-full">
				<NavBase />
			</div>

			<div className="fixed w-full z-10">
				<NavBase />
			</div>
		</>
	);
};

export default Nav;
