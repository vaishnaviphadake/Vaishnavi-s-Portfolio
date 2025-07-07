"use client";

import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Footer = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowTopBtn(window.scrollY > 300);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const footerLinks = [
		{
			title: "GitHub",
			href: "https://github.com/vaishnaviphadake",
			icon: <FaGithub className="text-xl" />,
		},
		{
			title: "LinkedIn",
			href: "https://www.linkedin.com/in/vaishnavi-phadake-63a1b0195",
			icon: <FaLinkedin className="text-xl" />,
		},
	];

	return (
		<footer className="relative z-10">
			{" "}
			{/* Fix: z-10 ensures it's clickable */}
			{/* Gradient background (can remain behind) */}
			<div className="absolute h-[350px] w-full bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-emerald-300/30 to-transparent -z-10 pointer-events-none"></div>
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className="border-t border-white/15 mt-8 py-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
				>
					{/* Left: Copyright */}
					<div className="text-white/40 text-center md:text-left">
						&copy; 2025 Vaishnavi Phadake. All rights reserved.
					</div>

					{/* Right: Social Links */}
					<nav className="flex flex-wrap gap-4 justify-center md:justify-end">
						{footerLinks.map((link) => (
							<a
								key={link.title}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 hover:bg-emerald-400/20 transition-all duration-300 shadow-sm hover:shadow-emerald-300"
							>
								{link.icon}
								<span className="font-semibold text-white">{link.title}</span>
							</a>
						))}
					</nav>
				</motion.div>
			</div>
			{/* Back to Top Button */}
			{showTopBtn && (
				<motion.button
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="fixed bottom-5 right-3 p-3 sm:p-2 sm:bottom-6 rounded-full bg-emerald-400 hover:bg-emerald-500 text-white shadow-lg transition transform hover:scale-110 z-50"
					aria-label="Back to top"
				>
					<FaArrowUp className="text-xl" />
				</motion.button>
			)}
		</footer>
	);
};
