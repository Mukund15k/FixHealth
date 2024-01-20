import React, { useState, useEffect } from "react";
import testimonialData from "../components/Store/testimonialsData";
import "./Testimonials.css";

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonialData.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fix-container">
      <div>
        <h2 className="testimonials-title">Testimonials</h2>
      </div>
      <div className="testimonials-container">
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className={
              index === currentTestimonialIndex
                ? "testimonial testimonial-active"
                : "testimonial"
            }
          >
            <p>
              <strong>{testimonial.name}</strong>
            </p>
            <p>{testimonial.description}</p>
            <p> -{testimonial.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
