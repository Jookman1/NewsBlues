import React from 'react';
import { Shield, Award, Users, Target } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Kairo Security
            </h2>
            <p className="text-xl text-gray-400">
              Leadership at Kairo Security Ltd
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-500">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  In my role as the Managing Director, Security Consultant, and Operations Manager at Kairo Security Ltd, 
                  I bring over a decade of experience in the security industry. With a track record of successfully aiding 
                  various festivals and nightclubs, I've cultivated a fantastic team poised to cater to the unique needs of our clients.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Whether actively engaging in frontline security operations or meticulously orchestrating security plans 
                  and logistics behind the scenes, my commitment is unwavering. I am dedicated to providing our clients with 
                  superior security solutions that are tailored precisely to their requirements.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  With a wealth of expertise garnered over the years, I have steered Kairo Security Ltd towards maintaining 
                  the highest standards of excellence, reliability, and professionalism. Trust us to deliver a customized and 
                  effective security approach that aligns seamlessly with your needs.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={300}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Award, title: "10+ Years", desc: "Industry Experience", delay: 0 },
                  { icon: Users, title: "Expert Team", desc: "Professional Staff", delay: 100 },
                  { icon: Shield, title: "Excellence", desc: "Highest Standards", delay: 200 },
                  { icon: Target, title: "Tailored", desc: "Custom Solutions", delay: 300 }
                ].map((item, index) => (
                  <AnimatedSection key={index} animation="scaleIn" delay={400 + item.delay}>
                    <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-900/70 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                      <item.icon className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-all duration-300 mb-4 group-hover:scale-110" />
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection animation="fadeInUp" delay={800}>
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6 hover:from-blue-500/15 hover:to-blue-600/15 hover:border-blue-500/30 transition-all duration-500">
                  <h3 className="text-xl font-bold text-white mb-3">Our Commitment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We are dedicated to providing superior security solutions that are tailored precisely to your requirements, 
                    maintaining the highest standards of excellence, reliability, and professionalism.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};