import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	function closeMenu() {
		setMenuOpen(false);
	}

	return (
		<header className="navbar">
			<div className="navbar__logo">Estefanía</div>

			<button
				className="navbar__toggle"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu"
			>
				☰
			</button>

			<nav className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
				<a href="#about" onClick={closeMenu}>
					About
				</a>
				<a href="#skills" onClick={closeMenu}>
					Skills
				</a>
				<a href="#projects" onClick={closeMenu}>
					Projects
				</a>
				<a href="#contact" onClick={closeMenu}>
					Contact
				</a>
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noreferrer"
					className="navbar__resume"
					onClick={closeMenu}
				>
					Resume
				</a>
			</nav>
		</header>
	);
}

export default Navbar;
