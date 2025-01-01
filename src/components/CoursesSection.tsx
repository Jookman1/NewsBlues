import React from 'react';
import { BookOpen, Shield, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const courses = [
  {
    icon: Shield,
    title: "SIA Door Supervisor Course",
    features: [
      "Full SIA approved curriculum",
      "Physical intervention training",
      "Conflict management",
      "First aid certification"
    ]
  },
  {
    icon: Users,
    title: "Security Officer Training",
    features: [
      "Security legislation",
      "Patrol techniques",
      "Emergency procedures",
      "Customer service skills"
    ]
  }
];

export default function CoursesSection() {
  return (
    <div className="py-20 cyber-grid relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/95" />
      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">Security Training Courses</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <ScrollReveal key={index} effect={index === 0 ? 'fade-left' : 'fade-right'}>
              <div className="bg-gray-800/50 p-8 rounded-lg hover-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
                <div className="relative">
                  <course.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <BookOpen className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}