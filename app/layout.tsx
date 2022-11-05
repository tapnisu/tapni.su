import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";
import "../styles/globals.css";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
					rel="stylesheet"
				/>
				<meta name="description" content="My personal website!" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>

			<body className="bg-black text-white">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
