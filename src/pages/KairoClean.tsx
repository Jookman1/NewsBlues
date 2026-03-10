import React from 'react';
import KairoCleanLanding from '../components/KairoCleanLanding';
import CleaningChecklist from '../components/CleaningChecklist';
import { PageTransition } from '../components/PageTransition';
import { ScrollProgress } from '../components/ScrollProgress';

export const KairoClean: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-black">
        <ScrollProgress />
        <KairoCleanLanding />
        <CleaningChecklist />
      </div>
    </PageTransition>
  );
};
