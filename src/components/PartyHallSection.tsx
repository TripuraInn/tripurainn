import React from "react";

const PartyHallSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Party Hall
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Our elegant party hall is perfect for all your special occasions - weddings, birthdays, corporate events, and more. 
            With modern amenities and flexible seating arrangements, we can accommodate your celebration needs.
          </p>
          <div className="rounded-lg overflow-hidden shadow-xl mb-8">
            <img
              src="/lovable-uploads/f3679f92-c72f-457d-a4d3-30c1ccc1b0b5.png"
              alt="Party Hall with decorated stage and seating arrangement"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Spacious air-conditioned hall</li>
                <li>• Professional lighting setup</li>
                <li>• Flexible seating arrangement</li>
                <li>• Decorated stage area</li>
                <li>• Large windows with natural light</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-navy mb-4">Capacity & Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Up to 100 guests seating</li>
                <li>• Customizable decoration</li>
                <li>• Event planning assistance</li>
                <li>• Catering services available</li>
                <li>• Ample parking space</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyHallSection;