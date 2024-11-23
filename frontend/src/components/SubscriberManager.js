import axios from "axios";
import React, { useEffect, useState } from "react";

const SubscriberManager = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/subscribers") // Corrected endpoint
      .then((response) => {
        setSubscribers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching subscribers:", err.message);
        setError("Failed to load subscribers.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Newsletter Subscribers</h2>
      {loading ? (
        <p>Loading subscribers...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Subscribed At</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber._id}>
                <td>{subscriber.email}</td>
                <td>{new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubscriberManager;
