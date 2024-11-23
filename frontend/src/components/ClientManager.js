import axios from "axios";
import React, { useEffect, useState } from "react";

const ClientManager = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({ name: "", designation: "", description: "", image: null });

  useEffect(() => {
    axios.get("https://flipr-backend.herokuapp.com/api/clients")
      .then((response) => setClients(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("designation", formData.designation);
    form.append("description", formData.description);
    form.append("image", formData.image);

    axios.post("https://flipr-backend.herokuapp.com/api/clients", form, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setClients([...clients, response.data]);
        setFormData({ name: "", designation: "", description: "", image: null });
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    axios.delete(`https://flipr-backend.herokuapp.com/api/clients/${id}`)
      .then(() => setClients(clients.filter((client) => client._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Manage Clients</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Client Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        <button type="submit">Add Client</button>
      </form>

      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            <img src={`https://flipr-backend.herokuapp.com${client.image}`} alt={client.name} width="100" />
            <h3>{client.name}</h3>
            <p>{client.designation}</p>
            <p>{client.description}</p>
            <button onClick={() => handleDelete(client._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientManager;
