import "../styles/footer.css";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p>© 2026 Estefanía Yepiz. Built with React + Vite.</p>

				<div className="footer__links">
					<a
						href="https://github.com/EstefaniaYepiz"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
					<a href="#" target="_blank" rel="noreferrer">
						LinkedIn
					</a>
					<a href="mailto:youremail@example.com">Email</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
