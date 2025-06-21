import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import BodySection from "./Components/BodySection";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import TaskPage from "./Components/TaskPage";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Render Navbar only on the home page */}
      {location.pathname === "/" && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BodySection />
              <Services />
              <Footer />
            </>
          }
        />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </>
  );
}

export default App;
