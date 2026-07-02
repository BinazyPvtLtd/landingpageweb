import React, { useState } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TrustedBy from "./Components/TrustedBy";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import FAQ from "./Components/FAQ";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import LeadFormPopup from "./Components/LeadFormPopup";
import ThankYou from "./Components/Thankyou";
import Testimonials from "./Components/Testimonials";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LeadFormPopup />
            <div id="home" />
            <Navbar onGetQuoteClick={openModal} />
            <Hero onGetQuoteClick={openModal} />
            <TrustedBy />
            <Services />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <Footer />
          </>
        }
      />
      <Route path="/submit-success" element={<ThankYou />} />
    </Routes>
  );
};

export default App;
