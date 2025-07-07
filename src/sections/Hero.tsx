import Image from "next/image";
import memojiImage from "../assets/images/memoji-org2.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { motion } from "framer-motion";

export const HeroSection = () => {
	return (
		<div
			id="home"
			className="relative z-0 overflow-x-clip pt-0 pb-32 sm:pt-24 sm:pb-40 lg:min-h-screen lg:flex lg:items-center lg:justify-center"
		>
			<div
				className="absolute inset-0 pointer-events-none"
				style={{
					maskImage:
						"linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
					WebkitMaskImage:
						"linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
				}}
			>
				<div
					className="absolute inset-0 -z-30 opacity-5"
					style={{ backgroundImage: `url(${grainImage.src})` }}
				></div>

				<div className="size-[620px] hero-ring"></div>
				<div className="size-[820px] hero-ring"></div>
				<div className="size-[1020px] hero-ring"></div>
				<div className="size-[1220px] hero-ring"></div>
				<div className="size-[1420px] hero-ring"></div>
				<div className="size-[1620px] hero-ring"></div>

				<HeroOrbit
					size={800}
					rotation={30}
					shouldOrbit
					orbitDuration="26s"
				>
					<SparkleIcon className="size-4 text-emerald-300/40" />
				</HeroOrbit>
				<HeroOrbit
					size={530}
					rotation={-20}
					shouldOrbit
					orbitDuration="32s"
					shouldSpin
					spinDuration="5s"
				>
					<SparkleIcon className="size-6 text-emerald-300/50" />
				</HeroOrbit>
				<HeroOrbit
					size={650}
					rotation={45}
					shouldOrbit
					orbitDuration="38s"
				>
					<div className="size-2 rounded-full bg-emerald-400/30" />
				</HeroOrbit>
				<HeroOrbit
					size={740}
					rotation={-90}
					shouldOrbit
					orbitDuration="44s"
					shouldSpin
					spinDuration="6s"
				>
					<StarIcon className="size-5 text-emerald-400/60" />
				</HeroOrbit>
				<HeroOrbit
					size={860}
					rotation={120}
					shouldOrbit
					orbitDuration="40s"
				>
					<StarIcon className="size-8 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit
					size={1000}
					rotation={-135}
					shouldOrbit
					orbitDuration="52s"
					shouldSpin
					spinDuration="7s"
				>
					<SparkleIcon className="size-6 text-emerald-400/25" />
				</HeroOrbit>
				<HeroOrbit
					size={1150}
					rotation={75}
					shouldOrbit
					orbitDuration="60s"
				>
					<div className="size-2.5 rounded-full bg-emerald-300/15" />
				</HeroOrbit>
			</div>

			<div className="container relative z-10 px-4 sm:px-6">
				<div className="flex flex-col items-center text-center">
					<Image
						src={memojiImage}
						alt="Female developer peeking behind laptop"
						width={120}
						height={120}
						className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] object-contain mx-auto mt-4"
					/>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold 
					bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
					bg-[length:300%_300%] bg-clip-text text-transparent animate-gradientText text-center mt-2"
					>
						Vaishnavi Phadake
					</motion.div>

					<div className="bg-gray-950 border border-gray-800 px-4 py-2 mt-4 inline-flex flex-wrap items-center justify-center gap-3 rounded-lg max-w-xs sm:max-w-none sm:gap-4">
						<div className="bg-green-500 size-2.5 rounded-full relative">
							<div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
						</div>
						<div className="text-sm font-medium text-white text-center">
							Actively seeking full-time opportunities as a Frontend Developer
						</div>
					</div>
				</div>

				<div className="max-w-2xl mx-auto mt-8 px-2 text-center">
					<h1 className="font-serif text-white/80 text-2xl sm:text-lg md:text-1xl leading-tight tracking-wide">
						Creating Seamless & Scalable Web Experiences
					</h1>
					<p className="mt-4 text-sm sm:text-base md:text-lg text-white/60">
						I&apos;m a frontend developer specializing in React.js and the MERN
						stack, committed to crafting performant, scalable, and maintainable
						web applications that enhance user experience and business impact.
					</p>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14 px-4">
					<a
						href="#projects"
						className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 h-12 rounded-3xl font-semibold text-sm sm:w-auto w-full text-center"
					>
						<span>Explore My Work</span>
						<ArrowDown className="size-4" />
					</a>
					<a
						href="#contact"
						className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-3xl font-semibold text-sm sm:w-auto w-full text-center"
					>
						<span>👋</span>
						<span>Let&apos;s Connect</span>
					</a>
				</div>
			</div>
		</div>
	);
};
