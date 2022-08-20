import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const pages = [
	{ href: "/", name: "Index" },
	{ href: "/page-one", name: "One" },
	{ href: "/page-two", name: "Two" },
	{ href: "/page-three", name: "Three" },
	{ href: "/page-four", name: "Four" }
];

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<div className="app-wrap bg-black">
			<LazyMotion features={domAnimation}>
				<AnimatePresence exitBeforeEnter={true}>
					<m.div
						key={router.route.concat("Fade Back")}
						className="page-wrap"
						initial="initial"
						animate="animate"
						exit="exit"
						variants={{
							initial: {
								opacity: 0,
								scale: 0.7
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: 0.7
							}
						}}
						transition={{
							duration: 0.7
						}}
					>
						<Component {...pageProps} />
					</m.div>
				</AnimatePresence>
			</LazyMotion>
		</div>
	);
}

export default MyApp;
