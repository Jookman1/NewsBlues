import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import CoursesSection from '../components/CoursesSection';
import { FEATURES } from '../config/features';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      {FEATURES.COURSES_ENABLED && <CoursesSection />}
      <ContactForm />
    </div>
  );
}