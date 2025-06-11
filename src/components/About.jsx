import React from "react";

const About = () => {
  return (
    <div className="bg-green-100 min-h-screen  py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          About Farm Vibe
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          At <span className="font-semibold text-green-600">Farm Vibe</span>, we
          believe in the power of nature to nourish and heal. Our mission is to
          connect communities with fresh, organic, and locally-sourced produce
          straight from the fields. We work closely with dedicated farmers who
          use sustainable and ethical farming practices, ensuring you get only
          the best.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="p-6 bg-green-200 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To bring fresh, chemical-free food from farms to every household
              and support the farming community.
            </p>
          </div>
          <div className="p-6 bg-green-200 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To build a sustainable ecosystem where agriculture and technology
              work hand-in-hand for a healthier planet.
            </p>
          </div>
          <div className="p-6 bg-green-200 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Why Choose Us
            </h3>
            <p className="text-gray-600">
              We ensure quality, freshness, and affordability, while maintaining
              transparency in every step of the supply chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
