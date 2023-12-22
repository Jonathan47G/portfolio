import React, { useState } from "react";
import Link from "next/link";
import { bangla } from "@/app/font";

interface HamburgerMenuProps {
	isOpen: boolean;
	onLinkClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	isOpen,
	onLinkClick,
}) => {
	const [activeLink, setActiveLink] = useState("accueil");
	const handleNavLinkClick = (hash: any) => {
		setActiveLink(hash);
		const element = document.getElementById(hash);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
		onLinkClick();
	};

	return (
		<div className="hamburgerMenu">
			<ul
				className={`hamburgerMenu__link ${bangla.className} ${
					isOpen ? "open" : ""
				}`}>
				<li>
					<Link href="/#competences">
						<p
							onClick={() => handleNavLinkClick("competences")}
							className={activeLink === "competences" ? "active" : ""}>
							Compétences
						</p>
					</Link>
				</li>
				<li>
					<Link href="/#projet">
						<p
							onClick={() => handleNavLinkClick("projet")}
							className={activeLink === "projet" ? "active" : ""}>
							Projets
						</p>
					</Link>
				</li>
				<li>
					<Link href="/#contact">
						<p
							onClick={() => handleNavLinkClick("contact")}
							className={activeLink === "contact" ? "active" : ""}>
							Contact
						</p>
					</Link>
				</li>
				<li>
					<Link
						href="/CV_Guestin_Jonathan.pdf"
						download={"CV-Guestin-Jonathan.pdf"}
						replace>
						<p>CV</p>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default HamburgerMenu;
