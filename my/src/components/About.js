import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../images/Me.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
                As a passionate full-stack web developer, I am committed to creating engaging and efficient web solutions that resonate with users. With a strong foundation in both front-end and back-end technologies, I take pride in delivering seamless experiences that merge innovative design with robust functionality. My expertise spans languages such as HTML, CSS, JavaScript, and frameworks like React and Node.js, allowing me to tackle complex challenges and bring ideas to life. Whether working on a solo project or collaborating within a dynamic team, my approach is driven by curiosity, creativity, and an unyielding pursuit of excellence.
                </p>
                </div>
		</section>
	);
}

export default About;