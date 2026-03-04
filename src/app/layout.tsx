import type { Metadata } from "next";
import "./globals.css";
import { text, display } from "./fonts";
import { siteConfig } from "@/content/siteConfig";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.siteUrl),
	title: {
		default: `Bookkeeper for small businesses | ${siteConfig.brandName}`,
		template: `%s | ${siteConfig.brandName}`,
	},
	description:
		"Monthly bookkeeping and catch-up support for small businesses. Clean reconciliations, clear reporting, and a steady monthly rhythm.",

	openGraph: {
		type: "website",
		url: siteConfig.siteUrl,
		siteName: siteConfig.brandName,
		images: [
			{
				url: "/elevate_devworks_seo_image.png",
				width: 1200,
				height: 630,
				alt: "Elevate DevWorks",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: [`${siteConfig.siteUrl}/elevate_devworks_seo_image.png`],
	},
	alternates: { canonical: siteConfig.siteUrl },

	icons: {
		// If you prefer explicit control in addition to app/icon.png:
		icon: "/images/favicon.png",
		apple: "/images/favicon.png",
		other: [
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#05305B",
			},
		],
	},
	robots: {
		index: false,
		follow: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${text.variable} ${display.variable}`}>
			<head>
				<meta charSet="utf-8" />
			</head>
			<body className="min-h-dvh flex flex-col">
				<main className="min-h-screen bg-background text-foreground">
					<Header />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
