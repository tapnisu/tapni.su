import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<nav className="backdrop-blur-sm bg-black/30 w-full">
				<ul>
					<li className="inline-block m-4">
						<Link href="/#home" className="m-4">
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

const Navbara = () => {
	return (
		<>
			<div className="opacity-0 w-full">
				<Navbar />
			</div>

			<div className="fixed w-full z-10">
				<Navbar />
			</div>
		</>
	);
};

export default Navbara;