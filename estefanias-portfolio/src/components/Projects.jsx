import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<motion.section
			id="projects"
			className="projects"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true, amount: 0.15 }}
		>
			<div className="projects__container">
				<p className="projects__tag">Projects</p>
				<h2>Featured Work</h2>

				<div className="projects__grid">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							className={`projects__card ${
								project.status === "featured" ? "featured" : ""
							}`}
							onClick={() => setSelectedProject(project)}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.35, delay: index * 0.08 }}
							viewport={{ once: true }}
						>
							<div className="projects__image">
								<img src={project.image} alt={project.title} />
							</div>

							<h3>{project.title}</h3>
							<p>{project.description}</p>

							{project.status === "featured" && (
								<span className="projects__featured">Featured</span>
							)}

							{project.status === "in-progress" && (
								<span className="projects__badge">In Progress</span>
							)}

							<div className="projects__stack">
								{project.stack.map((tech) => (
									<span key={tech}>{tech}</span>
								))}
							</div>

							<div className="projects__links">
								<span>View Details</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<ProjectModal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</motion.section>
	);
}

export default Projects;
