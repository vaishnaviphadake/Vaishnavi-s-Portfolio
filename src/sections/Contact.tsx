import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";

export const ContactSection = () => {
	return (
		<div
			id="contact"
			className="scroll-mt-24 pb-16"
		>
			<div className="container">
				<SectionHeader
					eyebrow="Contact Me"
					title="Let's Build Something Great"
					description="Whether it's a new project, a frontend role, or just a conversation — I’d love to hear from you."
				/>

				<div className="mt-12 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-10 px-6 md:px-12 lg:py-16 rounded-3xl relative overflow-hidden">
					{/* Grain texture overlay */}
					<div
						className="absolute inset-0 opacity-5 -z-10"
						style={{
							backgroundImage: `url(${grainImage.src})`,
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					></div>

					<div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
						<div className="flex-1">
							<h2 className="font-serif text-2xl md:text-3xl font-semibold">
								Open to Frontend Roles & Freelance Projects
							</h2>
							<p className="mt-3 text-base md:text-lg text-gray-800 max-w-2xl mx-auto md:mx-0">
								Looking to revamp your UI, build a modern web app, or hire a
								React/MERN frontend developer? Let’s connect and create
								something impactful.
							</p>
						</div>

						<div className="w-full md:w-auto">
							<a
								href="mailto:your.email@example.com"
								className="bg-gray-900 text-white h-12 w-full md:w-auto md:px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition hover:bg-gray-800"
							>
								<span>Say Hello</span>
								<ArrowUpRightIcon className="size-4" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
