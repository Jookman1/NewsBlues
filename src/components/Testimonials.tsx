import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "CALLUM READMAN",
    quote: "Kairo is a really good company to work for. Great management team and always willing to help when needed."
  },
  {
    name: "DEAN WOOD", 
    quote: "The best place I have ever worked. Professional environment with excellent support from management."
  },
  {
    name: "JON GORMAN",
    quote: "Was a great team to work for. Excellent communication and fair treatment of all staff members."
  },
  {
    name: "JACK WHISKEY",
    quote: "Ryan is very attentive to his staff and creates a positive working environment for everyone."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Team Says
          </h2>
          <p className="text-xl text-gray-400">
            Hear from our valued team members
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-blue-400 mb-6 group-hover:text-blue-300 transition-colors duration-300" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};