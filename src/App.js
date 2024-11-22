//C:\Users\hp\OneDrive\Desktop\project\frontend\src\App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Routes here
import AdminPanel from "./components/AdminPanel";
import LandingPage from "./pages/LandingPage";

const App = () => (
  <Router>
    <Routes> {/* Wrap all routes inside <Routes> */}
      {/* Landing Page Route */}
      <Route path="/" element={<LandingPage />} />

      {/* Admin Panel Route */}
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </Router>
);

export default App;
