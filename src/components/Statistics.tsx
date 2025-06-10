import React from 'react';

const stats = [
  { number: "1000+", label: "Events Secured" },
  { number: "50+", label: "Security Professionals" },
  { number: "10+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

export const Statistics: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
                  {stat.number}
                </span>
              </div>
              <p className="text-gray-400 text-lg font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};