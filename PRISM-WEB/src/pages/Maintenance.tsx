import React from "react";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-xl text-center bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-gray-100">
        
        <div className="text-5xl mb-4">🚧</div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We’ll be back soon
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Our website is currently undergoing transformation and we will be back
          with a new look soon by{" "}
          <span className="font-semibold text-gray-900">April 26th</span>.
        </p>

        <p className="text-gray-600 mt-4">
          In the meantime, sorry for the inconvenience. Please feel free to reach out
          to us with any queries at{" "}
          <a
            href="mailto:info@prism.institute"
            className="text-blue-600 font-semibold underline"
          >
            info@prism.institute
          </a>
        </p>

        <div className="mt-8 text-sm text-gray-400">
          — Prism Institute Team
        </div>
      </div>
    </div>
  );
};

export default Maintenance;