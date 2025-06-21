import React from "react";
import "./Services.css";
import {
  FaTractor,
  FaTint,
  FaSeedling,
  FaChartLine,
  FaRobot,
  FaShoppingCart,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaTractor />,
    title: "Precision Farming with AI",
    description:
      "Optimize yield using AI-powered insights for smarter crop management.",
  },
  {
    icon: <FaTint />,
    title: "Smart Irrigation Systems",
    description:
      "Reduce water waste with automated irrigation based on real-time conditions.",
  },
  {
    icon: <FaSeedling />,
    title: "Sustainable Crop Management",
    description:
      "Use data-driven strategies for healthier crops and eco-friendly practices.",
  },
  {
    icon: <FaChartLine />,
    title: "Farm Analytics Dashboard",
    description:
      "Monitor farm performance with real-time analytics and smart insights.",
  },
  {
    icon: <FaRobot />, // ✅ Replaces FaDrone
    title: "Agri-Tech & Automation",
    description:
      "Use AI-powered robots and automation for efficient farm operations.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Supply Chain & Market Insights",
    description:
      "Connect farmers with buyers and optimize logistics in real-time.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Empowering farmers with cutting-edge technology for a smarter,
        sustainable future.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
