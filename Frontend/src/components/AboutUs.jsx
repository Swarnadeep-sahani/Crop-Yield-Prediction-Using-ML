import "./AboutUs.css";
import AiImg from "../assets/ml.jpeg";
import farmingImg from "../assets/farming.jpg";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="content">
        <div className="layout">
          <div className="left-section">
            <ul>
              <li>• Who We Are</li>
            </ul>
          </div>
          <div className="right-section">
            <h1>
              We’re committed to helping farmers grow smarter and achieve better
              yields.
            </h1>
            <p className="description">
              We empower farmers to increase productivity, reduce waste, and
              contribute to a healthier planet with innovative tools and
              knowledge, enabling them to embrace sustainable practices,.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="info-cards">
        <div className="img-card">
          <img src={AiImg} alt="AI" />
        </div>
        <div className="card">
          <div className="card-header">
            <h3>AI</h3>
            <LuSquareArrowOutUpRight className="icon-button" />
          </div>
          <h4>Technology-Driven Emphasis</h4>

          <p>
            We ensure healthier crops, better yields, and a thriving
            agricultural future optimizing crop yields through data-driven
            insights which improves efficiency and productivity by 30%.
          </p>
        </div>

        <div className="img-card">
          <img src={farmingImg} alt="Vegetables" />
        </div>

        <div className="card highlight">
          <div className="card-header">
            <h3>100%</h3>
            <LuSquareArrowOutUpRight className="icon-button" />
          </div>
          <h4>Commitment to Smart Farming</h4>

          <p>
            We empower farmers with hands-on solutions, integrating technology
            with traditional farming methods to boost productivity by
            data-driven insights and sustainable techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
