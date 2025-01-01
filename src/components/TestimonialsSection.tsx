import React from 'react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: "CALLUM READMAN",
    text: "Kairo is a really good company to work for boss looks after you never need to worry about transport or wages staff good to work with aswell"
  },
  {
    name: "DEAN WOOD",
    text: "The best place I have ever worked and the boss is class but professional At the same time"
  },
  {
    name: "JON GORMAN",
    text: "Was a great team to work for and always had your back"
  },
  {
    name: "JACK WHISKEY",
    text: "Great company to work for, Ryan is very attentive to his staff and ensuring their welfare is to a high standard. & always ensuring the client is taken care of"
  }
];

export default function TestimonialsSection() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">What Our Team Says</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} effect={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <div className="bg-gray-800/50 p-6 rounded-lg hover-glow">
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-primary">{testimonial.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}