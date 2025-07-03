"use client";

// import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
// import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import ClientLayout from "@/components/ClientLayout";
import { ExperienceSection } from "@/sections/ExperienceSection";

export default function Home() {
	return (
		<div>
			{/* <Header /> */}
			<ClientLayout />
			<HeroSection />
			<ExperienceSection />
			<Projects />
			<TapeSection />
			{/* <TestimonialsSection /> */}
			<AboutSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
