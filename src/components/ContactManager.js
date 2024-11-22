import axios from "axios";
import React, { useEffect, useState } from "react";
import API_BASE_URL from "../apiConfig";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/contacts`)
      .then((response) => {
        setContacts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load contact form submissions.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Contact Form Submissions</h2>
      {loading ? (
        <p>Loading contacts...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>City</th> {/* or areaCity depending on the field name */}
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.mobile}</td>
                <td>{contact.areaCity || contact.city}</td> {/* Use areaCity or city */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactManager;
