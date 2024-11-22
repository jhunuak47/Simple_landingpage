import React, { useState } from "react";
import "./AdminPanel.css";
import ClientManager from "./ClientManager";
import ContactManager from "./ContactManager";
import ProjectManager from "./ProjectManager";
import SubscriberManager from "./SubscriberManager";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab("projects")}>Manage Projects</button>
        <button onClick={() => setActiveTab("clients")}>Manage Clients</button>
        <button onClick={() => setActiveTab("contacts")}>View Contacts</button>
        <button onClick={() => setActiveTab("subscribers")}>View Subscribers</button>
      </div>
      <div className="tab-content">
        {activeTab === "projects" && <ProjectManager />}
        {activeTab === "clients" && <ClientManager />}
        {activeTab === "contacts" && <ContactManager />}
        {activeTab === "subscribers" && <SubscriberManager />}
      </div>
    </div>
  );
};

export default AdminPanel;
