import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/blaxlrose"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../images/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/christopher-brown-6b6553261/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../images/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.threads.net/@the.original.chris.brown"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../images/threads-logo.png")}
						alt="Threads"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
