import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";
import CheckCircle from "@/assets/icons/check-circle.svg";

export const ExperienceSection = () => {
	return (
		<section
			id="experience"
			className="pb-16 scroll-mt-24"
		>
			<div className="container">
				<SectionHeader
					eyebrow="Experience"
					title="Where I've Worked"
					description="A quick look at my most recent role as a frontend developer."
				/>

				<Card className="mt-10 px-6 py-8 sm:px-8 md:px-12 lg:px-16">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
						<span className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
							Earnst & Young (EY)
						</span>
						<span className="text-sm mt-1 sm:mt-0 text-white/70 sm:text-right">
							Jan 2023 – Nov 2023
						</span>
					</div>

					<h3 className="font-serif text-xl sm:text-2xl md:text-3xl mt-3 sm:mt-4">
						Associate Software Engineer
					</h3>

					<hr className="border-t-2 border-white/10 mt-4 sm:mt-5" />

					<ul className="flex flex-col gap-3 mt-4 sm:mt-6">
						{[
							"Developed scalable web applications using React.js, Redux Toolkit, and TypeScript, improving performance by 40%.",
							"Designed and implemented modular, reusable components with Tailwind CSS and responsive layouts.",
							"Integrated REST APIs and handled asynchronous data fetching with Axios.",
							"Optimized frontend performance via lazy loading, code-splitting, and memoization.",
							"Built unit and integration tests using Jest and React Testing Library, reducing production bugs by 30%.",
							"Participated in code reviews, improving maintainability and enforcing best practices.",
						].map((item, idx) => (
							<li
								key={idx}
								className="flex gap-2 text-sm text-white/60 sm:text-base"
							>
								<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</Card>
			</div>
		</section>
	);
};
