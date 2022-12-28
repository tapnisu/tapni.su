import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<nav className="fixed backdrop-blur-sm bg-neutral-800/30 text-white w-full">
				<ul>
					<li className="inline-block m-4">
						<Link href="/" className="m-4">
							Home
						</Link>
					</li>
					<li className="inline-block m-4">
						<Link href="/projects" className="m-4">
							Projects
						</Link>
					</li>
					<li className="inline-block m-4">
						<Link href="/contact" className="m-4">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
