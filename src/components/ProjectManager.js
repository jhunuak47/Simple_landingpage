import axios from "axios";
import React, { useEffect, useState } from "react";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", image: null });

  // Fetch projects
  useEffect(() => {
    axios
      .get("https://flipr-backend-edeab9affc43.herokuapp.com/api/projects")
      .then((response) => setProjects(response.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("image", formData.image);

    axios
      .post("http://localhost:5000/api/projects", form, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setProjects([...projects, response.data]);
        setFormData({ name: "", description: "", image: null });
      })
      .catch((err) => console.error("Error adding project:", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/projects/${id}`)
      .then(() => setProjects(projects.filter((project) => project._id !== id)))
      .catch((err) => console.error("Error deleting project:", err));
  };

  return (
    <div>
      <h2>Manage Projects</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Project</button>
      </form>

      <h3>Existing Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img
              src={`http://localhost:5000${project.image}`}
              alt={project.name}
              width="100"
            />
            <button onClick={() => handleDelete(project._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
