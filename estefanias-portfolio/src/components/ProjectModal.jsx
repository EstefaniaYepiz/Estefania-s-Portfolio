import { useEffect } from "react";
import "../styles/projectModal.css";

function ProjectModal({ project, onClose }) {
	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === "Escape") {
				onClose();
			}
		}

		if (project) {
			document.body.style.overflow = "hidden";
			document.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.body.style.overflow = "auto";
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [project, onClose]);

	if (!project) return null;

	return (
		<div className="project-modal__overlay" onClick={onClose}>
			<div className="project-modal" onClick={(e) => e.stopPropagation()}>
				<button className="project-modal__close" onClick={onClose}>
					×
				</button>

				<div className="project-modal__image">
					<img src={project.image} alt={project.title} />
				</div>

				<div className="project-modal__content">
					<p className="project-modal__tag">
						{project.status === "featured"
							? "Featured Project"
							: project.status === "in-progress"
								? "In Progress"
								: "Project"}
					</p>

					<h3>{project.title}</h3>
					<p className="project-modal__description">{project.details}</p>

					<div className="project-modal__stack">
						{project.stack.map((tech) => (
							<span key={tech}>{tech}</span>
						))}
					</div>

					<div className="project-modal__links">
						{project.live !== "#" && (
							<a href={project.live} target="_blank" rel="noreferrer">
								Live Demo
							</a>
						)}
						{project.github !== "#" && (
							<a href={project.github} target="_blank" rel="noreferrer">
								GitHub
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectModal;
