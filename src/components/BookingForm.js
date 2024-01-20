import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import doctorsData from "./Store/doctoreData";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const urlCity = urlParams.get("city");

    if (urlCity) {
      setFormData((prevData) => ({ ...prevData, city: urlCity }));
    }
  }, [location.search]);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.name.trim() !== "" && formData.phoneNumber.trim() !== ""
        );
      case 2:
        return (
          formData.age.trim() !== "" &&
          formData.city.trim() !== "" &&
          formData.company.trim() !== ""
        );
      case 3:
        return formData.chiefComplaints.trim() !== "";
      case 4:
        return formData.age >= 40 || !formData.previousExperience;
      case 5:
        return formData.city.trim() !== "";
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    if (isStepComplete()) {
      const filtered = doctorsData.filter((doctor) => {
        return (
          doctor.city.toLowerCase() === formData.city.toLowerCase() &&
          (formData.age >= 40 || !formData.previousExperience)
        );
      });

      setFilteredDoctors(filtered);
      setIsFormSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      age: "",
      city: "",
      company: "",
      chiefComplaints: "",
      previousExperience: false,
    });
    setFilteredDoctors([]);
    setIsFormSubmitted(false);
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (isStepComplete() && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed-size-container">      
      <div className="container justify-content-center mt-5 bg-darkblue text-light p-4">
      <div>
      <h2>Appointment Form</h2>
      </div>
        <div className="row justify-content-center">
          
          <div className="col-md-6">
            <form>
              {currentStep === 1 && (
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                  <br />
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                  />
                </div>
              )}

              {currentStep === 2 && (
                <div className="form-group">
                  <label>Age:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                  />
                  <br />
                  <label>City:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                  <br />
                  <label>Company:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                  />
                </div>
              )}

              {currentStep === 3 && (
                <div className="form-group">
                  <label>Chief Complaints:</label>
                  <textarea
                    className="form-control"
                    value={formData.chiefComplaints}
                    onChange={(e) =>
                      handleInputChange("chiefComplaints", e.target.value)
                    }
                  />
                </div>
              )}

              {currentStep === 4 && formData.age >= 40 && (
                <div className="form-group">
                  <label>Any Previous Experience with Physiotherapy:</label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={formData.previousExperience}
                    onChange={() =>
                      handleInputChange(
                        "previousExperience",
                        !formData.previousExperience
                      )
                    }
                  />
                </div>
              )}
              {currentStep === 4 && formData.age < 40 && (
                <>
                  <p>
                    Previous experience check is not applicable for age less
                    than 40.
                  </p>
                  {handleNextStep()}
                </>
              )}

              {currentStep === 5 && (
                <div>
                  <h2>Best Available Doctors in {formData.city}</h2>
                  {filteredDoctors.length > 0 ? (
                    <ul>
                      {filteredDoctors.map((doctor, index) => (
                        <div key={index} class="doctor-item">
                        {doctor.name}  <div className="experties">{doctor.expertise}</div>
                      </div>
                      ))}
                    </ul>
                  ) : (
                    <h4>Press Submit to check Available Doctors</h4>
                  )}
                </div>
              )}

              <div className="text-center mt-3">
                <button
                  type="button"
                  className="btn btn-secondary mr-3 my-custom-button"
                  onClick={handlePreviousStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-primary mr-3 my-custom-button"
                  onClick={handleNextStep}
                  disabled={!isStepComplete() || currentStep === 5}
                >
                  Next
                </button>
                {currentStep === 5 && (
                  <>
                    <button
                      type="button"
                      className="btn btn-success my-custom-button"
                      onClick={handleSubmit}
                      disabled={!isStepComplete()}
                    >
                      Submit
                    </button>
                    {isFormSubmitted && (
                      <button
                        type="button"
                        className="btn btn-danger my-custom-button ml-2"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                    )}
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
