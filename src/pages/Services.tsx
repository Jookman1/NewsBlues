import React from 'react';
import { Shield, Users, Building2, Calendar } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Event Security",
    description: "Professional security services for festivals, concerts, and special events. We ensure the safety of attendees while maintaining a positive atmosphere."
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Venue Security",
    description: "Specialized security solutions for nightclubs, bars, and entertainment venues. Our team maintains order while ensuring guest satisfaction."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Door Supervision",
    description: "Licensed and professional door supervisors who combine security expertise with excellent customer service skills."
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Security Consulting",
    description: "Expert security planning and risk assessment services to help you develop comprehensive security strategies."
  }
];

const features = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Licensed & Insured",
    description: "All our security personnel are fully licensed and insured for your peace of mind."
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Experienced Team",
    description: "Our team brings years of experience in various security situations and environments."
  },
  {
    icon: <Calendar className="h-8 w-8 text-white" />,
    title: "24/7 Availability",
    description: "Round-the-clock security services to meet your needs at any time."
  }
];