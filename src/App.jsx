// src/App.jsx
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhoWeAre from "./pages/WhoWeAre";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import ManagementTeam from "./pages/ManagementTeam";
import StrategicPlan from "./pages/StrategicPlan";
import ServiceCharter from "./pages/ServiceCharter";
import Careers from "./pages/Careers";
import Tenders from "./pages/Tenders";
import Publications from "./pages/Publications";
import Complaints from "./pages/Complaints";
import Regulatory from "./pages/Regulatory";
import RegulatoryFramework from "./pages/RegulatoryFramework";
import LicensingAuthorization from "./pages/LicensingAuthorization";
import PublicConsultations from "./pages/PublicConsultations";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

// Placeholder components for pages not yet built

// ✅ Shared layout for Navbar + Footer
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/about/management-team" element={<ManagementTeam />} />
        <Route path="/about/strategic-plan" element={<StrategicPlan />} /> 
        <Route path="/about/service-charter" element={<ServiceCharter />} />
        <Route path="/about/careers" element={<Careers />} />
        <Route path="/about/tenders" element={<Tenders/>} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/regulatory/*" element={<Regulatory />} />
        <Route path="/regulatory/regulatoryframework" element={<RegulatoryFramework />} />
        <Route path="/regulatory/licensingauthorization" element={<LicensingAuthorization />} />
        <Route path="/regulatory/publicconsultations" element={<PublicConsultations />} />
        <Route path="/complaints" element={<Complaints />} />
      </Route>
    </Routes>
  );
}
