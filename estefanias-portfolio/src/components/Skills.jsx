import { motion } from "framer-motion";
import "../styles/skills.css";

function Skills() {
	const skills = [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"Vue",
		"Node.js",
		"Vite",
		"Git",
		"GitHub",
		"Responsive Design",
	];

	return (
		<motion.section
			id="skills"
			className="skills"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="skills__container">
				<p className="skills__tag">Skills</p>
				<h2>Tech I use</h2>

				<div className="skills__grid">
					{skills.map((skill, index) => (
						<motion.div
							key={skill}
							className="skills__card"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: index * 0.05 }}
							viewport={{ once: true }}
						>
							{skill}
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}

export default Skills;
