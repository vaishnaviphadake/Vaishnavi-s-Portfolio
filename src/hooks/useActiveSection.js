import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds) => {
	const [activeId, setActiveId] = useState(sectionIds[0]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{
				root: null,
				rootMargin: "-45% 0px -45% 0px",
				threshold: 0,
			}
		);

		const elements = [];

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) {
				observer.observe(el);
				elements.push(el);
			}
		});

		return () => {
			elements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, [sectionIds]);

	return activeId;
};
