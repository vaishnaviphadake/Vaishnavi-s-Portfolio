import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
	title,
	description,
	className,
}: {
	title: string;
	description: string;
	className?: string;
}) => {
	return (
		<div>
			<div className={twMerge("flex flex-col", className)}>
				<div className="flex justify-center">
					<div className="inline-flex items-center gap-2">
						<StarIcon className="size-9 text-emerald-300" />
						<h3 className="font-serif text-3xl">{title}</h3>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="inline-flex items-center gap-2"></div>
					<p className="text-md text-white/60 my-2">{description}</p>
				</div>
			</div>
		</div>
	);
};
