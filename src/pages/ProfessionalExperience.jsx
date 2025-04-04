import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfessionalExperience = () => {
  const navigate = useNavigate();

  const [experience, setExperience] = useState({
    company: "",
    roleName: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    currentlyWorking: false,
  });

  const [education, setEducation] = useState({
    degreeType: "",
    qualification: "",
    school: "",
    fieldOfStudy: "",
    eduStartDate: "",
    eduEndDate: "",
  });

  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  const handleExperienceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addExperience = () => {
    if (experience.company && experience.roleName && experience.startDate) {
      setExperiences([...experiences, experience]);
      setExperience({
        company: "",
        roleName: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
        currentlyWorking: false,
      });
    }
  };

  const addEducation = () => {
    if (education.degreeType && education.school && education.fieldOfStudy) {
      setEducations([...educations, education]);
      setEducation({
        degreeType: "",
        qualification: "",
        school: "",
        fieldOfStudy: "",
        eduStartDate: "",
        eduEndDate: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Professional Experience:", experiences);
    console.log("Education:", educations);
    navigate("/Skills-Training");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h4 className="fw-bold">Professional Experience</h4>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Company *</label>
              <input
                type="text"
                name="company"
                value={experience.company}
                onChange={handleExperienceChange}
                className="form-control"
                placeholder="Enter company name"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role Name *</label>
              <input
                type="text"
                name="roleName"
                value={experience.roleName}
                onChange={handleExperienceChange}
                className="form-control"
                placeholder="Enter role name"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Company Location *</label>
              <input
                type="text"
                name="location"
                value={experience.location}
                onChange={handleExperienceChange}
                className="form-control"
                placeholder="Enter location"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Start Date *</label>
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={handleExperienceChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">End Date *</label>
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={handleExperienceChange}
                className="form-control"
                required={!experience.currentlyWorking}
                disabled={experience.currentlyWorking}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={handleExperienceChange}
              className="form-control"
              placeholder="Enter description"
              rows="3"
            ></textarea>
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="currentlyWorking"
              checked={experience.currentlyWorking}
              onChange={handleExperienceChange}
              className="form-check-input"
            />
            <label className="form-check-label">
              I am currently working with this company
            </label>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              onClick={addExperience}
              className="btn btn-secondary mb-4"style={{ backgroundColor: "#4A90E2" }}
            >
              + Add
            </button>
          </div>

          <div >
            <h6 className="text-white p-2 rounded" style={{ backgroundColor: "#4A90E2" }} >Qualifications</h6>
          </div>

          <h5 className="mt-3">Education</h5>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Degree Type *</label>
              <select
                name="degreeType"
                value={education.degreeType}
                onChange={handleEducationChange}
                className="form-control"
                required
              >
                <option value="">Select degree type</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Qualification *</label>
              <input
                type="text"
                name="qualification"
                value={education.qualification}
                onChange={handleEducationChange}
                className="form-control"
                placeholder="Enter qualification"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">School *</label>
              <input
                type="text"
                name="school"
                value={education.school}
                onChange={handleEducationChange}
                className="form-control"
                placeholder="Enter school name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Field of Study *</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={education.fieldOfStudy}
                onChange={handleEducationChange}
                className="form-control"
                placeholder="Enter field of study"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Start Date *</label>
              <input
                type="date"
                name="eduStartDate"
                value={education.eduStartDate}
                onChange={handleEducationChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">End Date *</label>
              <input
                type="date"
                name="eduEndDate"
                value={education.eduEndDate}
                onChange={handleEducationChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              onClick={addEducation}
              className="btn btn-secondary mb-4"style={{ backgroundColor: "#4A90E2" }}
            >
              + Add 
            </button>
          </div>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#4A90E2" }}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
