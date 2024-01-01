"use client";

import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, [setLoaded]);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else if (theme === "dark") {
			setTheme("light");
		}
		// You can handle the "system" theme here if needed
	};

	return (
		<p onClick={toggleTheme} className="navBar__theme__icone">
			{loaded ? (
				theme === "dark" ? (
					<SunIcon />
				) : (
					<MoonIcon />
				)
			) : (
				<span className="sr-only">Toggle theme</span>
			)}
		</p>
	);
}
