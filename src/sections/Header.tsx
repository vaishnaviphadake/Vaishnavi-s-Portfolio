"use client";

import { useActiveSection } from "../hooks/useActiveSection";
import { useEffect, useState } from "react";

export const Header = () => {
	const activeSection = useActiveSection([
		"home",
		"projects",
		"about",
		"contact",
	]);

	const navItems = [
		{ id: "home", label: "Home" },
		{ id: "projects", label: "Projects" },
		{ id: "about", label: "About" },
		{ id: "contact", label: "Contact" },
	];

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="flex justify-center items-center fixed top-4 inset-x-0 z-[9999] px-4 sm:px-6">
			<nav className="flex flex-wrap gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur shadow-lg">
				{navItems.map((item) => (
					<a
						key={item.id}
						href={`#${item.id}`}
						className={`nav-item px-4 py-2 rounded-full transition-all duration-300 text-sm ${
							activeSection === item.id
								? "bg-white text-gray-900"
								: "text-white hover:bg-white/20"
						}`}
					>
						{item.label}
					</a>
				))}
			</nav>
		</div>
	);
};
