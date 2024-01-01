"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import HamburgerMenu from "@/composants/elements/HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../app/assets/images/logo/logo.png";
import LogoCV from "../../app/assets/images/logo/CV.svg";
import Image from "next/image";
import { bangla } from "@/app/font";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { ModeToggle } from "../elements/ButtonTheme";

function NavBar() {
	const [activeLink, setActiveLink] = useState("home");
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleNavLinkClick = (hash: any) => {
		setActiveLink(hash);
		const element = document.getElementById(hash);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
		setMenuOpen(false);
	};

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleScroll = () => {
				const sections = ["home", "competences", "projet", "contact"];
				let currentActiveLink = "home";

				for (const section of sections) {
					const element = document.getElementById(section);
					if (element) {
						const rect = element.getBoundingClientRect();

						// Condition pour vérifier si l'élément est visible à l'écran
						const isVisible =
							rect.top >= 0 &&
							rect.bottom <=
								(window.innerHeight || document.documentElement.clientHeight);

						if (isVisible) {
							currentActiveLink = section;
						}
					}
				}

				setActiveLink(currentActiveLink);
			};

			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);

	return (
		<nav className="navBar">
			<div className="navBar__header">
				<Link href="/">
					<Image
						src={Logo}
						className="navBar__logo"
						alt="Logo"
						width={50}
						height={50}
					/>
				</Link>
			</div>
			
			<button className="bouton__Hamburger" onClick={toggleMenu}>
				<FontAwesomeIcon icon={faBars} />
			</button>
			<HamburgerMenu
				isOpen={isMenuOpen}
				onLinkClick={() => setMenuOpen(false)}
			/>
			<ul className={`navBar__navLien ${bangla.className}`}>
				<li>
				<ModeToggle />
				</li>
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
						<Image
							className="navBar__CV"
							src={LogoCV}
							alt="Icone CV"
							width={30}
							height={30}
						/>
						<p>CV</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
