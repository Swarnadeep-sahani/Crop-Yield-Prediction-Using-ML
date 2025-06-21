import "./Mission.css";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import wateringImg from "../assets/watering.jpeg";
import happyFarmerImg from "../assets/happyFarmer.jpeg";

const Mission = () => {
  return (
    <>
      <div className="content">
        <div className="layout">
          <div className="left-section">
            <ul>
              <li>• Our Mission</li>
            </ul>
          </div>
          <div className="right-section">
            <h1>
              Our mission is to transform agriculture with innovation and
              sustainability.
            </h1>
            <p className="description">
              We strive to equip farmers with smart technology, efficient
              irrigation systems, and sustainable solutions to boost
              productivity while preserving natural resources.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="img-card">
          <img src={wateringImg} alt="AI" />
        </div>
        <div className="card">
          <div className="card-header">
            <h3>100%</h3>
            <LuSquareArrowOutUpRight className="icon-button" />
          </div>
          <h4>Smart Irrigation for Sustainable Farming</h4>

          <p>
            By advanced irrigation systems, we ensure water efficiency, reducing
            waste, maximizing crop hydration for healthier and resilient yields.
          </p>
        </div>

        <div className="img-card">
          <img src={happyFarmerImg} alt="Vegetables" />
        </div>

        <div className="card highlight">
          <div className="card-header">
            <h3>+70%</h3>
            <LuSquareArrowOutUpRight className="icon-button" />
          </div>
          <h4>Empowering Farmers with Support</h4>

          <p>
            Through advanced farming solutions, we promote eco-friendly
            practices, and create a self-sustaining ecosystem for future
            generations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
