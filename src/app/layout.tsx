import type { Metadata, Viewport } from "next";

import { scada } from "./font";
import Header from "@/composants/containers/Headers";
import Footer from "@/composants/containers/Footer";
export const viewport: Viewport = {
	themeColor: 'black',
  }
export const metadata: Metadata = {
	metadataBase: new URL("https://guestinjonathan.vercel.app/"),
	title: "Portfolio Guestin Jonathan, intégrateur web",
	description:
		"Je suis Guestin Jonathan, développeur web front-end passionnée par la création web. Expertise en HTML, CSS, Javascript, React et responsive design.",
	keywords: ["Next.js", "React", "JavaScript"],
	authors: [{ name: "Guestin", url: "https://guestinjonathan.vercel.app/" }],

	openGraph: {
		title: "Portfolio Guestin Jonathan, intégrateur web",
		description:
			"Je suis Guestin Jonathan, développeur web front-end passionnée par la création web. Expertise en HTML, CSS, Javascript, React et responsive design.",
		url: "https://guestinjonathan.vercel.app/",
		siteName: "Portfolio Guestin Jonathan, intégrateur web",
		images: [
			{
				url: "/image_seo.png",
				width: 800,
				height: 247,
			},
			{
				url: "/image_seo.png",
				width: 1600,
				height: 493,
				alt: "Portfolio Guestin Jonathan, intégrateur web",
			},
		],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary",
		creator: "@Jonath47Gu",
		site: "@Jonath47Gu",
		images: {
			url: "/image_seo.png",
			width: 1200,
			height: 630,
			alt: "Portfolio Guestin Jonathan, intégrateur web",
		},
	},
	
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
	
}) {
	return (
		<html className={scada.className} lang="fr">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
