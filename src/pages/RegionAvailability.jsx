import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RegionAvailability = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    primaryResidence: "",
    Country: "",
    State: "",
    City: "" ,
    additionalResidence: "",
    Country: "",
    State: "",
    City: "",
    selectedRegions: [],
  });

  const regions = [
    "United States",
    "Canada",
    "Mexico",
    "Asia",
    "Middle East",
    "Africa",
    "United Kingdom",
    "Oceania",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      selectedRegions: checked
        ? [...prevData.selectedRegions, value]
        : prevData.selectedRegions.filter((region) => region !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    navigate("/experience");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        
        <h4 className="text-white p-3 rounded" style={{ backgroundColor: "#4A90E2" }}>
          Region Availability
        </h4>

        <form onSubmit={handleSubmit} className="mt-3">
          
     
        
        <h4 className="text-black  rounded" >
          Primary Residence
        </h4>
        <p className="text-muted">List the primary city that you work as a local.</p>
          
          

          
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label fw-bold">
                 Country <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="Country"
                value={formData.Country}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter country"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">
                 State <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="State"
                value={formData.State}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter state"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">
                 City <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="City"
                value={formData.City}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter city"
                required
              />
            </div>

          </div>
          <hr />
          
        <h4 className="text-black  rounded" >
          Additional Residences
        </h4>
        <p className="text-muted">List the cities where you can work without requiring travel or housing expenses.</p>
          
          

          
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label fw-bold">
                 Country <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="Country"
                value={formData.Country}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter country"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">
                 State <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="State"
                value={formData.State}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter state"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">
                 City <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="City"
                value={formData.City}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter city"
                required
              />
               <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-secondary mb-4 text-align center " style={{ backgroundColor: "#4A90E2" }} >
             +  Add
            </button>
            </div>
              
             
            
            </div>
            </div>
            <hr />


          
          <div className="mb-3">
            <label className="form-label fw-">
            <h4>  Additional Regions of Experience </h4>
              <p classname="text muted">Areas you are willing to work with some relevant experience</p>
            </label>
            <div className="row">
              {regions.map((region, index) => (
                <div key={index} className="col-md-4">
                  <div className="form-check p-2">
                    <input
                      type="checkbox"
                      id={region}
                      name="selectedRegions"
                      value={region}
                      checked={formData.selectedRegions.includes(region)}
                      onChange={handleCheckboxChange}
                      className="form-check-input"
                    />
                    <label htmlFor={region} className="form-check-label">
                      {region}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-secondary"
            >
              Back
            </button>
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegionAvailability;
