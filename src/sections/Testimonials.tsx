import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/card";
import { Fragment } from "react";

const testimonials = [
	{
		name: "Alex Turner",
		position: "Marketing Manager @ TechStartups",
		text: "Vaishnavi was instrumental in transforming our website into a powerful marketing tool. Her attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
		avatar: memojiAvatar1,
	},
	{
		name: "Olivia Green",
		position: "Head of Design @ GreenLeaf",
		text: "Working with Vaishnavi was a pleasure. Her expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
		avatar: memojiAvatar2,
	},
	{
		name: "Daniel White",
		position: "CEO @ InnovateCo",
		text: "Vaishnavi's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
		avatar: memojiAvatar3,
	},
	{
		name: "Emily Carter",
		position: "Product Manager @ GlobalTech",
		text: "Vaishnavi is a true frontend wizard. She took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
		avatar: memojiAvatar4,
	},
	{
		name: "Michael Brown",
		position: "Director of IT @ MegaCorp",
		text: "Vaishnavi's work on our website has been nothing short of exceptional. She's a talented developer who is also a great communicator. We highly recommend her.",
		avatar: memojiAvatar5,
	},
];

export const TestimonialsSection = () => {
	return (
		<div className="py-12 lg:py-24">
			<div className="container">
				<SectionHeader
					eyebrow="Happy Clients"
					title="What Clients Say About Me"
					description="Don't jst take my word for it, see what my clients have to say about my work"
				/>
				<div
					className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image: linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]
				[-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
				>
					<div className="flex flex-none gap-8 pr-8 animate-move-left animation duration-90s hover:[animation-play-state:paused]">
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{testimonials.map((test) => (
									<Card
										key={test.name}
										className="max-w-xs md:max-w-md md:p-8 mx-2 hover:rotate-3 transition duration-300 py-4 -my-4"
									>
										<div className="flex gap-4 items-center">
											<div className="size-14 bg-gray-700 inline-flex items-center justifty-center rounded-full flex-shrink-0">
												<Image
													src={test.avatar}
													alt={test.name}
													className="max-h-full"
												/>
											</div>
											<div>
												<div className="font-semibold ">{test.name}</div>
												<div className="text-sm text-white/50">
													{test.position}
												</div>
											</div>
										</div>
										<p className="mt-4 md:mt-6 text-sm text-white/90 md:text-base">
											{test.text}
										</p>
									</Card>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
