import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HappyClients.css";

const HappyClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch clients from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/clients") // Ensure the API endpoint matches your backend route
      .then((response) => {
        setClients(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load clients.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="happy-clients">
      <h2 className="section-heading">Happy Clients</h2>
      <div className="heading-underline"></div>

      {/* Clients List */}
      {loading ? (
        <p>Loading clients...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="clients-grid">
          {clients.map((client) => (
            <div className="client-item" key={client._id}>
              <div className="client-image">
                <img
                  src={`http://localhost:5000${client.image}`} // Correctly serve the image
                  alt={client.name}
                  className="circle-image"
                />
              </div>
              <p className="client-description">{client.description}</p>
              <p className="client-name">{client.name}</p>
              <p className="client-designation">{client.designation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HappyClients;
