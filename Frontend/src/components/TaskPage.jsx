import "./TaskPage.css";
import { useState } from "react";
import axios from "axios";

const TaskPage = () => {
  const [formData, setFormData] = useState({
    Crop: "",
    Crop_Year: "",
    Season: "",
    State: "",
    Area: "",
    Production: "",
    Annual_Rainfall: "",
    Fertilizer: "",
    Pesticide: "",
    Predicted_Value: "",
  });
  const [remark, setRemark] = useState("");

  // Dropdown options
  const crops = [
    "Arecanut",
    "Arhar/Tur",
    "Banana",
    "Bajra",
    "Barley",
    "Black pepper",
    "Cardamom",
    "Cashewnut",
    "Castor seed",
    "Coconut ",
    "Coriander",
    "Cotton(lint)",
    "Cowpea(Lobia)",
    "Dry chillies",
    "Garlic",
    "Ginger",
    "Gram",
    "Groundnut",
    "Guar seed",
    "Horse-gram",
    "Jowar",
    "Jute",
    "Khesari",
    "Linseed",
    "Maize",
    "Masoor",
    "Mesta",
    "Moong(Green Gram)",
    "Moth",
    "Niger seed",
    "Oilseeds total",
    "Onion",
    "Other  Rabi pulses",
    "Other Cereals",
    "Other Kharif pulses",
    "Other Summer Pulses",
    "Peas & beans (Pulses)",
    "Potato",
    "Ragi",
    "Rapeseed &Mustard",
    "Rice",
    "Safflower",
    "Sannhamp",
    "Sesamum",
    "Small millets",
    "Soyabean",
    "Sugarcane",
    "Sunflower",
    "Sweet potato",
    "Tapioca",
    "Tobacco",
    "Turmeric",
    "Urad",
    "Wheat",
    "other oilseeds",
  ];

  const seasons = [
    "Autumn",
    "Kharif",
    "Rabi",
    "Summer",
    "Winter",
    "Whole Year",
  ];

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const years = Array.from({ length: 49 }, (_, i) => (1997 + i).toString());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission default (no page reload)

    // Prepare the data for backend
    const requestData = {
      crop: formData.Crop,
      crop_year: parseInt(formData.Crop_Year),
      season: formData.Season,
      state: formData.State,
      area: parseFloat(formData.Area),
      production: parseFloat(formData.Production),
      annual_rainfall: parseFloat(formData.Annual_Rainfall),
      fertilizer: parseFloat(formData.Fertilizer),
      pesticide: parseFloat(formData.Pesticide),
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        requestData
      );
      const predictedValue = response.data.prediction_tons_per_ha;
      const responseRemark = response.data.status;

      // Update the form with the predicted value (without changing other fields)
      setFormData((prevData) => ({
        ...prevData,
        Predicted_Value: predictedValue.toFixed(2), // Display the predicted value in the Predicted_Value field
      }));
      setRemark(responseRemark);
    } catch (error) {
      console.error("Error during prediction:", error);
      alert("Error during prediction. Please try again.");
    }
  };

  const renderInput = (key) => {
    const disabledFields = ["Predicted_Value"];

    // Units map
    const units = {
      Area: "hectare",
      Production: "ton",
      Annual_Rainfall: "mm",
      Fertilizer: "kg",
      Pesticide: "kg",
      Predicted_Value: "(kg/hectare)",
    };

    // Dropdowns
    if (["Crop", "Season", "State", "Crop_Year"].includes(key)) {
      const options = {
        Crop: crops,
        Season: seasons,
        State: states,
        Crop_Year: years,
      }[key];

      return (
        <select
          name={key}
          value={formData[key]}
          onChange={handleChange}
          required
        >
          <option value="">Select {key.replace("_", " ")}</option>
          {options.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      );
    }

    // Fields with units
    if (units[key]) {
      return (
        <div className="input-with-unit">
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required={!disabledFields.includes(key)}
            disabled={disabledFields.includes(key)}
          />
          <span className="unit-label">{units[key]}</span>
        </div>
      );
    }

    // Default input
    return (
      <input
        type="text"
        name={key}
        value={formData[key]}
        onChange={handleChange}
        required
      />
    );
  };

  return (
    <div className="task-section">
      <div className="task-overlay">
        <h2>Enter Crop Yield Data</h2>
        <div className="inputBox">
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => {
              if (key === "Predicted_Value") return null; // We'll render it separately
              return (
                <div key={key} className="input-group">
                  <label>{key.replace("_", " ")}</label>
                  {renderInput(key)}
                </div>
              );
            })}

            <div className="input-group">
              {/* <label>Submit</label> */}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>

            <div className="prediction-box">
              <label>Predicted Value (ton/hectare)</label>
              <div className="predicted-message">
                <div className="predicted-value-wrapper">
                  <input
                    type="text"
                    name="Predicted_Value"
                    value={
                      formData["Predicted_Value"]
                        ? `${formData["Predicted_Value"]}`
                        : ""
                    }
                    disabled
                  />
                  {formData.Predicted_Value && (
                    <div className="advice-message-inside">
                      <p>
                        Remark of Yield: <b>{remark}</b>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
