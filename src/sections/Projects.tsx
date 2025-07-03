import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";
import CheckCircle from "@/assets/icons/check-circle.svg";

export const Projects = () => {
	return (
		<section
			id="projects"
			className="pb-16 scroll-mt-24"
		>
			<div className="container">
				<SectionHeader
					eyebrow="Projects"
					title="Real-World Web Applications"
					description="Here are a few hands-on projects showcasing my frontend development skills using React and the MERN stack."
				/>

				<Card className="mt-10 px-8 py-10 md:px-12 lg:px-16">
					<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-3xl text-transparent bg-clip-text">
						<span>&bull;</span>
						<span>Movix</span>
					</div>
					<h3 className="font-serif text-2xl mt-2 md:mt-4 md:text-2xl">
						Movie Discovery Web App
					</h3>
					<hr className="border-t-2 border-white/10 mt-4 md:mt-5" />

					<ul className="flex flex-col gap-3 mt-4 md:mt-6">
						{[
							"Built with React 18 and Redux Toolkit to manage global state and improve performance.",
							"Fetched live movie & TV data using TMDB API with loading states and error handling.",
							"Implemented lazy loading, infinite scroll, and responsive carousels using Swiper.js.",
							"Added dynamic client-side routing with React Router DOM.",
							"Designed a clean, mobile-first UI using SCSS, CSS modules, and media queries.",
						].map((item, idx) => (
							<li
								key={`movix-${idx}`}
								className="flex gap-2 text-sm text-white/60 md:text-base"
							>
								<CheckCircle className="size-5 md:size-6" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</Card>

				{/* Food Express Project */}
				<Card className="mt-10 px-8 py-10 md:px-12 lg:px-16">
					<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-3xl text-transparent bg-clip-text">
						<span>&bull;</span>
						<span>Food Express</span>
					</div>
					<h3 className="font-serif text-2xl mt-2 md:mt-4 md:text-2xl">
						Food Delivery Web App
					</h3>
					<hr className="border-t-2 border-white/10 mt-4 md:mt-5" />

					<ul className="flex flex-col gap-3 mt-4 md:mt-6">
						{[
							"Developed a single-page application using React.js and Tailwind CSS for a clean, responsive UI.",
							"Used Redux Toolkit for global state management including cart, menu, and order states.",
							"Implemented dynamic routing for restaurant menus and item details using React Router.",
							"Integrated mock REST APIs with real-time updates and error fallbacks.",
							"Achieved 95% test coverage using Jest and React Testing Library.",
							"Improved UX with skeleton loaders, toast notifications, and optimized asset delivery.",
						].map((item, idx) => (
							<li
								key={`food-${idx}`}
								className="flex gap-2 text-sm text-white/60 md:text-base"
							>
								<CheckCircle className="size-5 md:size-6" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</Card>
			</div>
		</section>
	);
};
