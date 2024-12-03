import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-offwhite py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            About Our Hotel
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Nestled in an idyllic location, our hotel combines timeless luxury
            with modern comfort. Every detail has been carefully curated to ensure
            an unforgettable stay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Rooms",
                description: "Elegantly designed spaces for ultimate comfort",
              },
              {
                title: "Fine Dining",
                description: "Award-winning restaurants and exceptional cuisine",
              },
              {
                title: "Wellness Spa",
                description: "Rejuvenating treatments and peaceful surroundings",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;