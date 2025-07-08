import { motion } from "framer-motion";

const ResumeComp = () => (
	<motion.div
		className="text-center mt-8 px-4"
		initial={{ opacity: 0, y: 40, scale: 0.95 }}
		whileInView={{ opacity: 1, y: 0, scale: 1 }}
		transition={{
			type: "spring",
			stiffness: 100,
			damping: 12,
			delay: 0.2,
		}}
		viewport={{ once: true, amount: 0.5 }}
	>
		{/* <p className="text-lg md:text-xl font-medium mb-5 text-white/70">
			Want to know more about my journey?
		</p> */}

		<div className="relative inline-block group">
			<div className="absolute -inset-2 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-sky-400 opacity-30 blur-xl transition duration-500 group-hover:blur-2xl group-hover:opacity-50 animate-pulse pointer-events-none z-0" />

			<a
				href="https://drive.google.com/file/d/1ArTJShKZKNhafp_c05XJI_DbKvHWUeRs/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
				className="relative z-10 inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 font-semibold shadow-md transition-transform duration-300 hover:scale-105"
			>
				📄 View My Resume
			</a>
		</div>
	</motion.div>
);

export default ResumeComp;
