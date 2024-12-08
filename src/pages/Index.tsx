import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import RoomSection from "../components/RoomSection";
import PartyHallSection from "../components/PartyHallSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <RoomSection />
      <PartyHallSection />
      <ContactSection />
    </div>
  );
};

export default Index;