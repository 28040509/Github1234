import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";

const BasicDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    position: "",
    about: "",
    mobileNumber: "",
    email: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/region-availability");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="col-md-12">
          <h4 className="text-white p-3 rounded" style={{ backgroundColor: "#4A90E2" }}>
            Basic Details
          </h4>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">

          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label fw-bold">First Name <span className="text-danger">*</span></label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter first name"
                required
              />

              <label className="form-label fw-bold mt-3">Gender <span className="text-danger">*</span></label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold">Last Name<span className="text-danger">*</span></label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter last name"
                required
              />

              <label className="form-label fw-bold mt-3">Position <span className="text-danger">*</span></label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter position"
                required
              />
            </div>
            <div className="col-md-4">
              <div className=" mb-4">
                <div className="d-flex flex-column align-items-center">
                  <label className="fw-bold mb-2">Upload Photo </label>
                  <div className="position-relative" >
                    
                    {formData.photo ? (
                      <img
                        src={formData.photo}
                        alt="Avatar Preview"
                        className="rounded-circle border border-primary"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      
                      />
                    ) : (
                      <FaUserCircle size={130} className="text-secondary"/>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="position-absolute w-100 h-100 opacity-0"
                      style={{ top: 0, left: 0, cursor: "pointer" }}
                      required
            
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="mb-3" >
            <label className="form-label fw-bold">About</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="form-control"
              placeholder="Write here..."
              rows="2"
            ></textarea>
          </div>
          <hr />

          <h5 className="fw-bold mb-3">Contact</h5>
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label fw-bold">Mobile Number <span className="text-danger">*</span></label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter mobile number"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Email Address <span className="text-danger">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter email address"
                required
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="text-end">
              <button type="submit" className="btn btn-primary px-4"style={{ backgroundColor: "#4A90E2" }}>
                Next
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BasicDetails;