import React from "react";

const RoomSection = () => {
  const rooms = [
    {
      title: "Deluxe Suite",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "$299",
      description: "Spacious suite with ocean view and private balcony",
    },
    {
      title: "Executive Room",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "$199",
      description: "Modern comfort with city skyline views",
    },
    {
      title: "Presidential Suite",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      price: "$499",
      description: "Ultimate luxury with personalized service",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Our Rooms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-navy">
                    {room.title}
                  </h3>
                  <span className="text-gold font-bold">{room.price}/night</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <button className="w-full bg-navy text-white py-2 rounded-md hover:bg-navy/90 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSection;