
import React from "react";
import AddClient from "../components/AdminPanel/AddClient";
import AddProject from "../components/AdminPanel/AddProject";
import ViewContacts from "../components/AdminPanel/ViewContacts";
import ViewSubscribers from "../components/AdminPanel/ViewSubscribers";

const AdminPanel = () => {
    return (
        <div>
            <h1>Admin Panel</h1>
            <AddProject />
            <AddClient />
            <ViewContacts />
            <ViewSubscribers />
        </div>
    );
};

export default AdminPanel;
