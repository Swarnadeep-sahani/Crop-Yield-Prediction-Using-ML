import "./Vision.css";
import droneImg from "../assets/drone.jpeg";
import farmerImg from "../assets/farmerTab.jpeg";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Vision = () => {
  return (
    <>
      <div className="content">
        <div className="layout">
          <div className="left-section">
            <ul>
              <li>• Our Vision</li>
            </ul>
          </div>
          <div className="right-section">
            <h1>
              We envision a future where agriculture is powered by intelligence
              and sustainability.
            </h1>
            <p className="description">
              Our vision is to harness the power of technology to revolutionize
              farming, ensuring higher yields, reduced environmental impact, and
              empowered farmers.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="img-card">
          <img src={droneImg} alt="AI" />
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Tools</h3>
            <LuSquareArrowOutUpRight className="icon-button" />
          </div>
          <h4>AI-Powered Precision Farming</h4>

          <p>
            We leverage artificial intelligence and real-time data to optimize
            farming techniques, enhancing efficiency and increasing crop yields
            by 35%.
          </p>
        </div>

        <div className="img-card">
          <img src={farmerImg} alt="Vegetables" />
        </div>

        <div className="card highlight">
          <div className="card-header">
            <h3>+95%</h3>
            <LuSquareArrowOutUpRight className="icon-button" />
          </div>
          <h4>Growth & Innovation</h4>

          <p>
            We support farmers with innovative tools and knowledge to embrace
            sustainable practices, increase their income, and secure a
            prosperous future.
          </p>
        </div>
      </div>
    </>
  );
};

export default Vision;
