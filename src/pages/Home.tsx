import React from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Statistics } from '../components/Statistics';
import { Testimonials } from '../components/Testimonials';
import { JoinTeam } from '../components/JoinTeam';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';
import { PageTransition } from '../components/PageTransition';
import { getPatternBackground } from '../utils/theme';

export const Home: React.FC = () => {
  const patternStyle = getPatternBackground('kairosec');

  return (
    <PageTransition>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: patternStyle.backgroundColor,
          backgroundImage: patternStyle.backgroundImage,
          backgroundSize: patternStyle.backgroundSize,
          backgroundAttachment: patternStyle.backgroundAttachment,
        }}
      >
        <ScrollProgress />
        <Header />
        <Services />
        <About />
        <Statistics />
        <Testimonials />
        <JoinTeam />
        <Contact />
        <Footer />
      </div>
    </PageTransition>
  );
};
