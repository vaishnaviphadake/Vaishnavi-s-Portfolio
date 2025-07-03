"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { motion } from "framer-motion";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";

const Toolbox = [
	{ title: "HTML5", iconType: <HTMLIcon className="w-6 h-6 text-[#E34F26]" /> },
	{ title: "CSS3", iconType: <CSSIcon className="w-6 h-6 text-[#1572B6]" /> },
	{
		title: "Tailwind CSS",
		iconType: <span className="text-sky-400 font-bold text-xs">TW</span>,
	},
	{
		title: "JavaScript",
		iconType: <JavaScriptIcon className="w-6 h-6 text-[#F7DF1E]" />,
	},
	{
		title: "TypeScript",
		iconType: <span className="text-[#3178C6] text-base font-bold">TS</span>,
	},
	{
		title: "React.js",
		iconType: <ReactIcon className="w-6 h-6 text-[#61DAFB]" />,
	},
	{
		title: "Redux Toolkit",
		iconType: (
			<span className="text-purple-600 text-xs font-semibold">Redux</span>
		),
	},
	{
		title: "Next.js",
		iconType: (
			<span className="text-blue-600 text-base font-semibold">Next</span>
		),
	},
	{
		title: "Node.js",
		iconType: (
			<span className="text-green-700 text-xs font-semibold">Node</span>
		),
	},
	{ title: "GitHub", iconType: <GithubIcon className="w-6 h-6 text-white" /> },
	{
		title: "Chrome DevTools",
		iconType: <ChromeIcon className="w-6 h-6 text-[#f4d942]" />,
	},
	{
		title: "Express.js",
		iconType: (
			<span className="text-green-700 text-xs font-semibold">Express</span>
		),
	},
	{
		title: "REST APIs",
		iconType: <span className="text-blue-600 text-xs font-semibold">API</span>,
	},
	{
		title: "MongoDB",
		iconType: (
			<span className="text-green-600 text-xs font-semibold">Mongo</span>
		),
	},
	{
		title: "Jest Testing",
		iconType: <span className="text-pink-600 text-xs font-semibold">Jest</span>,
	},
	{
		title: "Responsive Design",
		iconType: <span className="text-indigo-500 text-lg">📱</span>,
	},
];

const hobbies = [
	{ title: "Reading", emoji: "📖" },
	{ title: "Music", emoji: "🎧" },
	{ title: "Fitness", emoji: "🏋️‍♀️" },
	{ title: "Cooking", emoji: "👩‍🍳" },
];

export const AboutSection = () => {
	const constraintRef = useRef(null);

	return (
		<div
			id="about"
			className="scroll-mt-28 pt-28 pb-16"
		>
			<div className="container">
				<SectionHeader
					eyebrow="About Me"
					title="A Glimpse Into My World"
					description="Learn more about who I am, what I do and what inspires me"
				/>

				<div className="m-4 mt-20 flex flex-col gap-8">
					{/* Toolbox */}
					<div className="grid grid-cols-1">
						<Card className="min-h-[320px] p-4">
							<CardHeader
								title="My Toolbox"
								description="Here are the technologies, tools, and practices I use to build performant, maintainable, and beautiful web apps."
								className="px-2 pt-4"
							/>

							<div className="group overflow-hidden">
								<ToolboxItems
									items={Toolbox}
									className="mx-1 my-1 group-hover:[animation-play-state:paused]"
									itemsWrapperClassName="animate-move-left"
								/>
							</div>

							<div className="group overflow-hidden">
								<ToolboxItems
									items={Toolbox}
									className="mx-1 my-2 mt-3 group-hover:[animation-play-state:paused]"
									itemsWrapperClassName="-translate-x-1/2 animate-move-right"
								/>
							</div>
						</Card>
					</div>

					{/* Hobbies */}
					{/* Hobbies */}
					<div className="grid grid-cols-1">
						<Card className="min-h-[320px] p-4 flex flex-col">
							<CardHeader
								title="Beyond the Code"
								description="When I’m not coding, you’ll find me immersed in these activities that keep me balanced and inspired."
								className="px-2 pt-4 md:pb-6"
							/>

							<div className="py-4 px-2 flex justify-center items-center w-full">
								<div
									ref={constraintRef}
									className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl"
								>
									{hobbies.map((hobby, index) => (
										<motion.div
											key={hobby.title}
											initial={{ opacity: 0, y: 30 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.5,
												delay: index * 0.2,
												type: "spring",
												stiffness: 150,
											}}
											viewport={{ once: true, amount: 0.5 }}
											whileHover={{
												scale: 1.05,
												boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
											}}
											className="flex flex-col items-center justify-center text-center px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 w-full min-w-0"
											drag
											dragConstraints={constraintRef}
										>
											<span className="text-2xl sm:text-3xl">
												{hobby.emoji}
											</span>
											<span className="font-semibold text-gray-900 text-sm sm:text-base mt-2">
												{hobby.title}
											</span>
										</motion.div>
									))}
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
