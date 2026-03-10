import React from 'react';
import KairoCleanLanding from '../components/KairoCleanLanding';
import { PageTransition } from '../components/PageTransition';
import { ScrollProgress } from '../components/ScrollProgress';

export const KairoClean: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-black">
        <ScrollProgress />
        <KairoCleanLanding />
      </div>
    </PageTransition>
  );
};
