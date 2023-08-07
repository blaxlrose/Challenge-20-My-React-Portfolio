import React from 'react';
import projects from './Project'; // Assuming the projects.js file is in the same directory

const Portfolio = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-5">My Portfolio</h1>
      {Array.from({ length: 3 }, (_, rowIndex) => (
        <div className="row mb-4" key={rowIndex}>
          {Array.from({ length: 2 }, (_, colIndex) => {
            const projectIndex = rowIndex * 2 + colIndex;
            const project = projects[projectIndex];
            return project ? (
              <div key={colIndex} className="col-md-6 mb-4">
                <div className="card custom-card">
                  <img src={project.image} className="card-img-top" alt={project.name} />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="card-text">
                      <strong>Technologies:</strong> {project.technologies.join(', ')}
                    </p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      GitHub
                    </a>
                    <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Deployed
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-md-6 mb-4"></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
