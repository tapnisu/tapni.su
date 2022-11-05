import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import React from "react";
import "../styles/globals.css";

export default function RootLayout({
	children,
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
			</head>

			<body className="bg-black text-white">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
