import { motion } from "framer-motion";
import "../styles/hero.css";

function Hero() {
	return (
		<section className="hero">
			<div className="hero__glow hero__glow--top"></div>
			<div className="hero__glow hero__glow--bottom"></div>

			<div className="hero__frame">
				<div className="hero__side-text hero__side-text--left">
					frontend developer
				</div>

				<div className="hero__content">
					<motion.div
						className="hero__text"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<p className="hero__tag">Creative Developer</p>

						<h1>
							Building clean,
							<br />
							modern web experiences.
						</h1>

						<p className="hero__description">
							I’m Estefanía, a frontend developer focused on responsive
							interfaces, polished user experiences, and turning ideas into
							functional, beautiful products.
						</p>

						<div className="hero__buttons">
							<a href="#projects" className="hero__btn hero__btn--primary">
								View Projects
							</a>
							<a href="#contact" className="hero__btn hero__btn--secondary">
								Contact Me
							</a>
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noreferrer"
								className="hero__btn hero__btn--secondary"
							>
								Resume
							</a>
						</div>

						<div className="hero__links">
							<a
								href="https://github.com/EstefaniaYepiz"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
							<a
								href="https://www.linkedin.com/in/estefaniayepiz/"
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
							<a href="mailto:estefaniayepiz@gmail.com">Email</a>
						</div>
					</motion.div>

					<motion.div
						className="hero__image-wrap"
						initial={{ opacity: 0, scale: 0.92 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7, delay: 0.15 }}
					>
						<div className="hero__image-glow"></div>
						<div className="hero__image-shape">
							<img
								src="/Images/profile.png"
								alt="Estefanía portrait"
								className="hero__image"
							/>
						</div>
					</motion.div>
				</div>

				<div className="hero__side-text hero__side-text--right">portfolio</div>
			</div>
		</section>
	);
}

export default Hero;
