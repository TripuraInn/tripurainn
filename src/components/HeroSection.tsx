import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-navy/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Tripura Inn A/C Rooms
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Experience unparalleled luxury in the heart of paradise
          </p>
          <button className="bg-gold text-navy px-8 py-3 rounded-md text-lg font-semibold hover:bg-gold/90 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;