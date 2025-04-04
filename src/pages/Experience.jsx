import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("safety");

  const handleNavChange = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const [safetyExperience, setSafetyExperience] = useState({
    yearsInProduction: "",
    yearsInSafetyRelated: "",
    yearsAsSafetyAdvisor: "",
  });

  const [professionalBackground, setProfessionalBackground] = useState({});

  const backgroundOptions = [
    "Intelligence Agency",
    "Government",
    "Special Forces",
    "Law Enforcement",
    "Emergency Services",
    "Corporate Security",
    "Medical Services",
    "Military",
    "Others",
  ];

  const [productionExperience, setProductionExperience] = useState({
    studio: "",
    production: "",
    roleName: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    currentlyWorking: false,
  });

  const [productions, setProductions] = useState([]);

  const handleSafetyChange = (e) => {
    const { name, value } = e.target;
    setSafetyExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBackgroundChange = (e) => {
    const { name, checked } = e.target;
    setProfessionalBackground((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleProductionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductionExperience((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addProduction = () => {
    const {
      studio,
      production,
      roleName,
      startDate,
      endDate,
      location,
    } = productionExperience;

    if (
      studio &&
      production &&
      roleName &&
      startDate &&
      (productionExperience.currentlyWorking || endDate) &&
      location
    ) {
      setProductions([...productions, productionExperience]);
      setProductionExperience({
        studio: "",
        production: "",
        roleName: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        currentlyWorking: false,
      });
    }
  };

  const removeProduction = (index) => {
    const updated = productions.filter((_, i) => i !== index);
    setProductions(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAtLeastOneBackgroundSelected = Object.values(professionalBackground).some(Boolean);

    if (!isAtLeastOneBackgroundSelected) {
      alert("Please select at least one Professional Background option.");
      return;
    }

    console.log("Safety Experience: ", safetyExperience);
    console.log("Professional Background: ", professionalBackground);
    console.log("Production Experience: ", productions);
    navigate("/skills-training");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h4 className="text-white p-3 rounded" style={{ backgroundColor: "#4A90E2" }}>
          Experience
        </h4>

        <Tab.Container activeKey={activeTab}>
          <Nav variant="tabs" onSelect={handleNavChange}>
            <Nav.Item>
              <Nav.Link eventKey="security">Security/Executive</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="safety">Safety</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content className="mt-3">
            <Tab.Pane eventKey="security">
              <h3>Security/Executive Content</h3>
              
            </Tab.Pane>

            <Tab.Pane eventKey="safety">
              <form onSubmit={handleSubmit}>
                
                <div className="mb-4">
                  
                  <div className="row">
                    {["yearsInProduction", "yearsInSafetyRelated", "yearsAsSafetyAdvisor"].map((field, i) => (
                      <div className="col-md-4 mb-3" key={i}>
                        <label className="form-label">
                          {field === "yearsInProduction" && "Years in Production *"}
                          {field === "yearsInSafetyRelated" && "Years in a Safety-Related Field *"}
                          {field === "yearsAsSafetyAdvisor" && "Years as a Safety Advisor *"}
                        </label>
                        <input
                          type="number"
                          name={field}
                          value={safetyExperience[field]}
                          onChange={handleSafetyChange}
                          className="form-control"
                          placeholder={
                            field === "yearsInProduction"
                            ? "select number of experience"
                            : "select year of experience"
                          }
                          required
                        />
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="mb-4">
                  <h5 className="fw-bold">Professional Background</h5>
                  <p>Please select at least one option from below</p>
                  <div className="row">
                    {backgroundOptions.map((option, index) => (
                      <div key={index} className="col-md-4 mb-2">
                        <input
                          type="checkbox"
                          name={option}
                          checked={professionalBackground[option] || false}
                          onChange={handleBackgroundChange}
                          className="form-check-input"
                          id={`bg-${index}`}
                        />
                        <label className="form-check-label ms-2" htmlFor={`bg-${index}`}>
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="mb-4">
                  <h5 className="fw-bold">Production Experience</h5>
                  <div className="row mb-3">
                    {["studio", "production", "roleName"].map((field, i) => (
                      <div className="col-md-4" key={i}>
                        <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)} *</label>
                        <input
                          type="text"
                          name={field.name}
                          value={productionExperience[field.name]}
                          onChange={handleProductionChange}
                          className="form-control"
                          
                          
                          required
                        />
                      </div>
                    ))}
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label className="form-label">Start Date *</label>
                      <input
                        type="date"
                        name="startDate"
                        value={productionExperience.startDate}
                        onChange={handleProductionChange}
                        className="form-control"
                        placeholder="Select date"
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">End Date *</label>
                      <input
                        type="date"
                        name="endDate"
                        value={productionExperience.endDate}
                        onChange={handleProductionChange}
                        className="form-control"
                        placeholder="Select date"
                        disabled={productionExperience.currentlyWorking}
                        required={!productionExperience.currentlyWorking}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Production Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={productionExperience.location}
                        onChange={handleProductionChange}
                        className="form-control"
                        placeholder="Enter location"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      value={productionExperience.description}
                      onChange={handleProductionChange}
                      className="form-control"
                      placeholder="Enter description"
                      rows="3"
                    />
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="currentlyWorking"
                      checked={productionExperience.currentlyWorking}
                      onChange={handleProductionChange}
                      id="currentlyWorking"
                    />
                    <label className="form-check-label" htmlFor="currentlyWorking">
                      I am currently working with this production
                    </label>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      onClick={addProduction}
                      className="btn btn-secondary mb-4"
                      style={{ backgroundColor: "#4A90E2" }}
                    >
                      + Add
                    </button>
                  </div>

                  {productions.length > 0 && (
                    <div className="mt-3">
                      <h6>Previous Productions:</h6>
                      <ul className="list-group">
                        {productions.map((prod, idx) => (
                          <li key={idx} className="list-group-item d-flex justify-content-between align-items-start">
                            <div>
                              <strong>{prod.production}</strong> at {prod.studio} — {prod.roleName} (
                              {prod.startDate} to {prod.currentlyWorking ? "Present" : prod.endDate})<br />
                              <small className="text-muted">{prod.location}</small><br />
                              <small>{prod.description}</small>
                            </div>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => removeProduction(idx)}
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#4A90E2" }}>
                    Continue
                  </button>
                </div>
              </form>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Experience;
