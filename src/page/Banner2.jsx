import React from 'react';

const Benner2 = () => {
  return (
    <section className="relative bg-cover bg-center py-60" style={{ backgroundImage: "url('/assets/banner2.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">We provide good quality squid as you wish</h1>
        <p className="mt-4 text-lg max-w-md">
        With our proper cold storage and handling , we ensure fresh squid will be send to your place as good as possible
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">Contact us for further information</button>
      </div>
    </section>
  );
};

export default Benner2;
