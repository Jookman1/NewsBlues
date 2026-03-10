import React from 'react';
import { TwoBoxesLanding } from '../components/TwoBoxesLanding';
import { ScrollProgress } from '../components/ScrollProgress';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black w-screen overflow-hidden">
      <ScrollProgress />
      <TwoBoxesLanding />
    </div>
  );
};
