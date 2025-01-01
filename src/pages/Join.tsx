import React from 'react';
import { Mail, Phone, MapPin, BriefcaseIcon } from 'lucide-react';

export default function Join() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Join Our Team</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
            <p className="text-gray-300 mb-6">
              Join one of the UK's most professional and respected security companies. We're always looking 
              for talented individuals who share our commitment to excellence and professionalism.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {positions.map((position, index) => (
                <div key={index} className="border border-gray-700 p-6 rounded-lg">
                  <BriefcaseIcon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <ul className="space-y-2 mb-6">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-300">07939119680</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-300">careers@kairosecurity.co.uk</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-300">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const positions = [
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