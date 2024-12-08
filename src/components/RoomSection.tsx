import React from "react";

const RoomSection = () => {
  const rooms = [
    {
      title: "Executive",
    },
    {
      title: "Deluxe",
    },
    {
      title: "Deluxe +",
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy text-center">
                  {room.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSection;