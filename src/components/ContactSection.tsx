import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-navy text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact & Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p>
                  <span className="text-gold">Address:</span>
                  <br />
                  Hyderabad Rd, Sri Ram Nagar Colony,
                  <br />
                  Balaji Colony, Nalgonda,
                  <br />
                  Telangana 508001, India
                </p>
                <p>
                  <span className="text-gold">Phone:</span>
                  <br />
                  +1 (555) 123-4567
                </p>
                <p>
                  <span className="text-gold">Email:</span>
                  <br />
                  info@tripurainn.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-white/80">
                  Located in the heart of Nalgonda, our hotel is just:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-white/80">
                  <li>15 minutes from Nalgonda Bus Station</li>
                  <li>5 minutes walk to local markets</li>
                  <li>10 minutes to City Center</li>
                  <li>Walking distance to major attractions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;