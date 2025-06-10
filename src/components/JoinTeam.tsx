import React from 'react';
import { Briefcase, Phone, Mail, MapPin } from 'lucide-react';
import { smoothScrollToId } from '../utils/smoothScroll';

const jobPositions = [
  {
    title: "Door Supervisor",
    description: "Join our team of professional door supervisors at various venues across the UK.",
    requirements: [
      "Valid SIA Door Supervisor License",
      "Excellent communication skills",
      "Professional appearance",
      "Flexible availability",
      "Customer service oriented"
    ]
  },
  {
    title: "Event Security Officer",
    description: "Work at exciting events and festivals providing essential security services.",
    requirements: [
      "SIA License required",
      "Experience in event security preferred",
      "Strong team player",
      "Ability to work varying schedules",
      "Physical fitness required"
    ]
  }
];

export const JoinTeam: React.FC = () => {
  const handleApplyClick = () => {
    smoothScrollToId('contact');
  };

  return (
    <section id="join" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Career Opportunities
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-16">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            Join one of the UK's most professional and respected security companies. We're always looking 
            for talented individuals who share our commitment to excellence and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {jobPositions.map((position, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <Briefcase className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                  {position.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {position.description}
                </p>
              </div>

              <div className="mb-8">
                <ul className="space-y-3">
                  {position.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={handleApplyClick}
                className="group/btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Apply Now
                <span className="inline-block ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
              <p className="text-gray-300">020 3883 1389</p>
            </div>
            
            <div className="text-center">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-300">careers@kairosecurity.co.uk</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
              <p className="text-gray-300">United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};