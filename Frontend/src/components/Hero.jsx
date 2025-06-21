import { FaArrowRight } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bringing Innovation to Your Farming Journey.
          </h1>
          <p className="hero-subtext">
            From precision agriculture to sustainable practices, we help you
            grow more efficiently and profitably. Join us in transforming the
            way you farm!
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button
              className="hero-btn primary"
              onClick={() => navigate("/task")}
            >
              <span>Get Started to Prediction</span>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="mission-box">
          <h2>
            <FaSeedling /> Our Mission
          </h2>
          <p>
            To empower farmers with innovative tools and technology that drive
            productivity, sustainability, and efficiency, shaping the future of
            farming through smart data, real-time insights, collaborative
            platforms, and accessible agricultural education.
          </p>

          {/* <button className="hero-btn secondary">
            <span>Learn More</span>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
