// import grainImage from "@/assets/images/grain.jpg";
// import { PropsWithChildren, CSSProperties } from "react";
// import { twMerge } from "tailwind-merge";

// export const Card = ({
// 	className,
// 	children,
// 	style,
// }: PropsWithChildren<{ className?: string; style?: CSSProperties }>) => {
// 	return (
// 		<div
// 			className={twMerge(
// 				"bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0after: outline after:outline-1 after:outline-white/10 after:outline-offset-2 after:rounded-3xl after:pointer-events-none p-6 outline-white/40",
// 				className
// 			)}
// 			style={style}
// 		>
// 			<div
// 				className="absolute inset-0 -z-10 opacity-10"
// 				style={{
// 					backgroundImage: `url(${grainImage.src})`,
// 				}}
// 			></div>
// 			{children}
// 		</div>
// 	);
// };
import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren, CSSProperties } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Card = ({
	className,
	children,
	style,
}: PropsWithChildren<{ className?: string; style?: CSSProperties }>) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			whileHover={{ scale: 1.015 }}
			className={twMerge(
				"bg-gray-800 rounded-3xl relative z-0 overflow-hidden p-6 outline-white/40 group transition-all duration-300 ease-in-out shadow-md hover:shadow-white/10",
				className
			)}
			style={style}
		>
			{/* Grain background */}
			<div
				className="absolute inset-0 -z-10 opacity-10"
				style={{
					backgroundImage: `url(${grainImage.src})`,
					backgroundSize: "cover",
					backgroundRepeat: "repeat",
				}}
			></div>

			{/* Shimmer effect */}
			<div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden -z-10">
				<div className="absolute inset-y-0 left-[-50%] w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
			</div>

			{/* Animate content in */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};
