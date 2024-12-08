import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/lovable-uploads/a3a142c7-ed9d-4e6e-8b27-1efb133f2c90.png), url(/lovable-uploads/8a8c81d3-fdf2-4c0a-9f12-ec9111e6f70b.png), url(/lovable-uploads/c3a29e93-e478-47d0-9703-6cb052083c7b.png), url(/lovable-uploads/bd4c9713-dc66-40a9-b087-86e4f1857bb6.png), url(/lovable-uploads/82a4be37-7c5f-4df0-9522-d4fc53be5671.png)",
          backgroundSize: "33.33% 50%, 33.33% 50%, 33.33% 50%, 50% 50%, 50% 50%",
          backgroundPosition: "left top, center top, right top, left bottom, right bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-navy/60" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Tripura Inn A/C Rooms
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Experience comfort stay in Nalgonda
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;