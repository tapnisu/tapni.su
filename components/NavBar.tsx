import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<nav className="fixed backdrop-blur-sm bg-black/30 w-full p-4">
				<ul>
					<li className="inline m-4">
						<Link href="/#home" className="m-4">
							Home
						</Link>
					</li>
					<li className="inline m-4">
						<Link href="/#projects" className="m-4">
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

export default Navbar;
