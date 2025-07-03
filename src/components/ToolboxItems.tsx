import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({
	items,
	className,
	itemsWrapperClassName,
}: {
	items: {
		title: string;
		iconType: React.ReactNode;
	}[];
	className?: string;
	itemsWrapperClassName?: string;
}) => {
	return (
		// 👇 Add `group` here
		<div
			className={twMerge(
				"group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
				className
			)}
		>
			{/* 👇 This will now pause animation on hover */}
			<div
				className={twMerge(
					"flex flex-none py-0.5 gap-1 pr-6",
					"animate-move-left group-hover:[animation-play-state:paused]",
					itemsWrapperClassName
				)}
			>
				{[...new Array(2)].map((_, index) => (
					<Fragment key={index}>
						{items.map((item) => (
							<div
								key={`${index}-${item.title}`}
								className="inline-flex items-center gap-4 py-3 px-3 mr-3 lg:mr-5 outline outline-2 outline-white/10 rounded-lg"
							>
								<div className="bg-gray-700 p-1 rounded-lg">
									<span className="size-10 text-white drop-shadow-md">
										{item.iconType}
									</span>
								</div>
								<span>{item.title}</span>
							</div>
						))}
					</Fragment>
				))}
			</div>
		</div>
	);
};
