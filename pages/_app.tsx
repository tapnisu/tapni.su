import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<div className="app-wrap bg-black">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
