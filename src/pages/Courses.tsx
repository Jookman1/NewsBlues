import React from 'react';
import { BookOpen, Award, Clock, Users } from 'lucide-react';

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Security Training Courses</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-center text-gray-300">
            Start your career in security with our professional SIA approved training courses. 
            Get certified and join our team of security professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold ml-4">{course.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{course.description}</p>
              <ul className="space-y-2 mb-6">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              {benefit.icon}
              <h3 className="text-xl font-bold my-4">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const courses = [
  {
    title: "SIA Door Supervisor Course",
    description: "Get your SIA Door Supervisor License with our comprehensive training program.",
    features: [
      "Full SIA approved curriculum",
      "Physical intervention training",
      "Conflict management",
      "First aid certification",
      "Practical assessments",
      "Job placement assistance"
    ]
  },
  {
    title: "Security Officer Training",
    description: "Comprehensive security officer training for various security roles.",
    features: [
      "Security legislation",
      "Patrol techniques",
      "Emergency procedures",
      "Report writing",
      "Customer service skills",
      "Health and safety"
    ]
  }
];

const benefits = [
  {
    icon: <Award className="h-12 w-12 text-primary mx-auto" />,
    title: "SIA Approved Training",
    description: "Our courses are fully approved by the Security Industry Authority (SIA)."
  },
  {
    icon: <Clock className="h-12 w-12 text-primary mx-auto" />,
    title: "Flexible Schedule",
    description: "Choose from various course dates to fit your schedule."
  },
  {
    icon: <Users className="h-12 w-12 text-primary mx-auto" />,
    title: "Job Opportunities",
    description: "Direct access to job opportunities with Kairo Security Ltd."
  }
];