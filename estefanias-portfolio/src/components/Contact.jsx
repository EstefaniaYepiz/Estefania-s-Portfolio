import { motion } from "framer-motion";
import "../styles/contact.css";

function Contact() {
	return (
		<motion.section
			id="contact"
			className="contact"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="contact__container">
				<p className="contact__tag">Contact</p>
				<h2>Let’s build something great together</h2>
				<p className="contact__text">
					I’m currently looking for opportunities where I can grow as a frontend
					developer, contribute to meaningful projects, and keep building
					polished user experiences.
				</p>

				<div className="contact__actions">
					<a
						href="mailto:estefaniayepiz@gmail.com"
						className="contact__btn contact__btn--primary"
					>
						Email Me
					</a>

					<a
						href="https://github.com/EstefaniaYepiz"
						target="_blank"
						rel="noreferrer"
						className="contact__btn contact__btn--secondary"
					>
						GitHub
					</a>

					<a
						href="https://www.linkedin.com/in/estefaniayepiz/"
						target="_blank"
						rel="noreferrer"
						className="contact__btn contact__btn--secondary"
					>
						LinkedIn
					</a>

					<a
						href="../../public/Resume.pdf"
						target="_blank"
						rel="noreferrer"
						className="contact__btn contact__btn--secondary"
					>
						Resume
					</a>
				</div>
			</div>
		</motion.section>
	);
}

export default Contact;
