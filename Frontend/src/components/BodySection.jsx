import React, { useState } from "react";
import "./BodySection.css";
import AboutUs from "./AboutUs";
import Vision from "./Vision";
import Mission from "./Mission";

const BodySection = () => {
  const [activeTab, setActiveTab] = useState(0); // Default active tab is "About Us"

  const tabs = ["About Us", "Vision", "Mission"];

  return (
    <section className="body-section">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)} // Set the active tab on click
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content Rendering */}
      <div className="tab-content">
        {activeTab === 0 && <AboutUs />}
        {activeTab === 1 && <Vision />}
        {activeTab === 2 && <Mission />}
      </div>
    </section>
  );
};

export default BodySection;
