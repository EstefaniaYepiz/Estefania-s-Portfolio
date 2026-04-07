import { motion } from "framer-motion";
import "../styles/about.css";

function About() {
	return (
		<motion.section
			id="about"
			className="about"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="about__container">
				<div className="about__title">
					<p>About</p>
					<h2>Frontend developer with a creative eye</h2>
				</div>

				<div className="about__content">
					<p>
						I’m a frontend developer focused on building modern, responsive, and
						visually polished web experiences. I enjoy turning ideas into clean
						interfaces that feel intuitive, engaging, and professional.
					</p>

					<p>
						I work mainly with React, JavaScript, Vite, and CSS, and I enjoy
						combining strong UI design with practical functionality. My projects
						reflect both creativity and problem-solving, from elegant event
						platforms to dynamic multi-list apps with real interactive logic.
					</p>

					<p>
						I’m currently looking for opportunities where I can keep growing as
						a developer, contribute to meaningful products, and continue
						strengthening both my frontend and full-stack skills.
					</p>
				</div>
			</div>
		</motion.section>
	);
}

export default About;
