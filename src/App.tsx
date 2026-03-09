import React from 'react';
import { Header } from './components/Header';
import { TwoBoxesLanding } from './components/TwoBoxesLanding';
import { About } from './components/About';
import { Services } from './components/Services';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { JoinTeam } from './components/JoinTeam';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollProgress />
      <Header />
      <TwoBoxesLanding />
      <About />
      <Services />
      <Statistics />
      <Testimonials />
      <JoinTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;