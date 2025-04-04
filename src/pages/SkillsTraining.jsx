import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsTraining = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [description, setDescription] = useState("");
  const [activeTab, setActiveTab] = useState("security"); 

  const securitySkills = [
 
  ];

  const accessControlSkills = [
   
  ];

  const fireSafetySkills = [
    "Risk Assessment and Management",
    "Access Control",
    "Fire Safety Training",
    "Emergency Response Planning",
    "Threat Analysis",
    "Security Technology Training",
    "Cyber Security Training",
    "Conflict Resolution",
    "Surveillance Systems Training",
    "Surveillance and Monitoring",
    "Security Audits",
    "Defensive Driving Training",
    "Crisis Management",
    "Training and Development",
    "Hostile Environment Awareness",
    "Incident Reporting",
    "First Aid/CPR",
    "Workplace Violence Prevention",
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handlePublish = () => {
    if (selectedSkills.length === 0 && !description.trim()) {
      alert("Please select at least one skill or add a description.");
      return;
    }

    if (window.confirm("Are you sure you want to publish?")) {
      console.log("Selected Skills:", selectedSkills);
      console.log("Description:", description);
      setSelectedSkills([]);
      setDescription("");
      alert("Skills & Training details published successfully!");
    }
  };

  const handleDiscard = () => {
    if (window.confirm("Are you sure you want to discard changes?")) {
      setSelectedSkills([]);
      setDescription("");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
      
        <h4 className="text-white p-3 rounded" style={{ backgroundColor: "#4A90E2" }}>
          Skills & Training
        </h4>

        
        <div className="d-flex border-bottom mb-3">
          <button
            className={`btn flex-fill ${activeTab === "security" ? "text-primary border-bottom border-primary fw-bold" : "text-muted"}`}
            onClick={() => setActiveTab("security")}
          >
            Security/Executive
          </button>
          <button
            className={`btn flex-fill ${activeTab === "safety" ? "text-primary border-bottom border-primary fw-bold" : "text-muted"}`}
            onClick={() => setActiveTab("safety")}
          >
            Safety
          </button>
        </div>

        
        
        <div className="row">
         
          {activeTab === "security" && (
            <>
              <div className="row">
                {securitySkills.map((skill, index) => (
                  <div key={index} className="form-check col-md-4 py-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedSkills.includes(skill)}
                      onChange={() => toggleSkill(skill)}
                    />
                    <label className="form-check-label">{skill}</label>
                  </div>
                ))}
              </div>

              <div className="row">
                {accessControlSkills.map((skill, index) => (
                  <div key={index} className="form-check col-md-4 py-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedSkills.includes(skill)}
                      onChange={() => toggleSkill(skill)}
                    />
                    <label className="form-check-label">{skill}</label>
                  </div>
                ))}
              </div>
            </>
          )}

          
          {activeTab === "safety" && (
            <div className="row">
              {fireSafetySkills.map((skill, index) => (
                <div key={index} className="form-check col-md-4 py-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                  />
                  <label className="form-check-label">{skill}</label>
                </div>
              ))}
            </div>
          )}
        </div>

       
      

        
        <div className="mt-4 d-flex justify-content-end">
          <button className="btn btn-outline-primary me-2 px-4" onClick={handleDiscard}>Discard</button>
          <button className="btn btn-primary px-4" onClick={handlePublish}>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default SkillsTraining;
