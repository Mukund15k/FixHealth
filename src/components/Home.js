import React from "react";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

const Home = () => {
  const royalBlueBackground = {
    backgroundColor: "#000115",
    color: 'white', 
    
  };

  return (
    <div style={royalBlueBackground}>
      <Navbar />
      <Hero />
      <BookingForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
