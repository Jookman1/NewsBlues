import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Kairo Security</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Leadership at Kairo Security Ltd</h2>
            <p className="text-gray-300 mb-6">
              In my role as the Managing Director, Security Consultant, and Operations Manager at Kairo Security Ltd, 
              I bring over a decade of experience in the security industry. With a track record of successfully aiding 
              various festivals and nightclubs, I've cultivated a fantastic team poised to cater to the unique needs 
              of our clients.
            </p>
            <p className="text-gray-300 mb-6">
              Whether actively engaging in frontline security operations or meticulously orchestrating security plans 
              and logistics behind the scenes, my commitment is unwavering. I am dedicated to providing our clients 
              with superior security solutions that are tailored precisely to their requirements.
            </p>
            <p className="text-gray-300 mb-6">
              With a wealth of expertise garnered over the years, I have steered Kairo Security Ltd towards maintaining 
              the highest standards of excellence, reliability, and professionalism. Trust us to deliver a customized 
              and effective security approach that aligns seamlessly with your needs.
            </p>
            <p className="text-right italic">~Ryan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{testimonial.name}</h3>
                <p className="text-gray-300">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const teamTestimonials = [
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