import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren, CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
	className,
	children,
	style,
}: PropsWithChildren<{ className?: string; style?: CSSProperties }>) => {
	return (
		<div
			className={twMerge(
				"bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0after: outline after:outline-1 after:outline-white/10 after:outline-offset-2 after:rounded-3xl after:pointer-events-none p-6 outline-white/40",
				className
			)}
			style={style}
		>
			<div
				className="absolute inset-0 -z-10 opacity-10"
				style={{
					backgroundImage: `url(${grainImage.src})`,
				}}
			></div>
			{children}
		</div>
	);
};
