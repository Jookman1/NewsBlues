import React from 'react';
import { TwoBoxesLanding } from './components/TwoBoxesLanding';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-black w-screen overflow-hidden">
      <ScrollProgress />
      <TwoBoxesLanding />
    </div>
  );
}

export default App;