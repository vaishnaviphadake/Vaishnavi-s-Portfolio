import StarIcon from "@/assets/icons/star.svg";

const words = [
	"Efficient",
	"Engaging",
	"Secure",
	"Scalable",
	"User Friendly",
	"Maintainable",
	"Search Optimized",
	"Reliable",
	"React.js Expert",
	"Responsive Design",
	"Reusable Components",
	"Tailwind CSS",
	"Redux Toolkit",
	"API Integration",
	"Clean Code",
	"Optimized Performance",
	"Mobile-First Approach",
	"TypeScript Ready",
	"Jest Testing",
	"Pixel Perfect UI",
	"Cross-Browser Support",
	"Interactive",
];

export const TapeSection = () => {
	return (
		<div className="py-16 lg:py-24 overflow-hidden">
			<div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1 h-12 lg:h-16 flex items-center">
				<div className="relative w-full">
					<div
						className="flex w-[200%] animate-marquee gap-8
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
					>
						{[...new Array(2)].map((_, idx) => (
							<div
								key={idx}
								className="flex gap-6"
							>
								{words.map((word) => (
									<div
										key={`${idx}-${word}`}
										className="inline-flex gap-3 items-center"
									>
										<span className="text-gray-900 uppercase font-extrabold text-sm whitespace-nowrap">
											{word}
										</span>
										<StarIcon className="size-5 text-gray-900 -rotate-5" />
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
