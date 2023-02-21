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
		<html lang="en">
			<head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>

			<body className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col justify-between">
				<Navbar />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
