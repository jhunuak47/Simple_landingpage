import axios from "axios";
import React, { useEffect, useState } from "react";
import "./OurProjects.css";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="our-projects">
      <h2 className="section-heading">Our Projects</h2>
      <div className="heading-underline"></div>
      <p className="projects-intro">
        We have worked on numerous successful projects across various industries. Here are a few examples of what we can do.
      </p>
      {loading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-item" key={project._id}>
              <img
                src={`http://localhost:5000${project.image}`}
                alt={project.name}
                className="project-image"
              />
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <button className="read-more-button">Read More</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurProjects;
