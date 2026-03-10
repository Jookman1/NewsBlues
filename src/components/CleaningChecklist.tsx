import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ChecklistItem {
  text: string;
  highlight?: boolean;
}

interface ChecklistCard {
  title: string;
  items: ChecklistItem[];
  accentText?: string;
}

const CleaningChecklist: React.FC = () => {
  const cards: ChecklistCard[] = [
    {
      title: 'ARRIVAL',
      accentText: 'First things first.',
      items: [
        { text: 'Park respectfully/Legally' },
        { text: 'Bring correct equipment inside' },
        { text: 'Confirm job scope with client (if present)' },
        { text: 'Check for damage or hazards before starting' },
      ],
    },
    {
      title: 'CLEANING ORDER',
      items: [
        { text: 'Declutter surfaces' },
        { text: 'Dust high to low' },
        { text: 'Clean surfaces' },
        { text: 'Clean kitchen/bathroom' },
        { text: 'Vacuum' },
        { text: 'Mop last' },
      ],
    },
    {
      title: 'LIVING AREAS & BEDROOMS',
      items: [
        { text: 'Dust all surfaces' },
        { text: 'Wipe switches & handles' },
        { text: 'Vacuum floors & edges' },
        { text: 'Skirting boards checked' },
      ],
    },
    {
      title: 'KITCHEN',
      items: [
        { text: 'Worktops cleaned & disinfected' },
        { text: 'Sink & taps polished' },
        { text: 'Hob cleaned' },
        { text: 'Appliance fronts wiped' },
        { text: 'Bins emptied & replaced' },
      ],
    },
    {
      title: 'BATHROOM',
      items: [
        { text: 'Toilet cleaned & disinfected' },
        { text: 'Sink & taps polished' },
        { text: 'Shower/bath scrubbed' },
        { text: 'Mirrors cleaned' },
        { text: 'Floors disinfected' },
      ],
    },
    {
      title: 'FINAL CHECKS',
      accentText: 'Last but not least.',
      items: [
        { text: 'No streaks left on mirrors or chrome' },
        { text: 'No missed corners' },
        { text: 'Bin liners replaced' },
        { text: 'Equipment packed away' },
        { text: 'Property secured before leaving' },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#1a1a1a] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45 text-white text-2xl font-bold">♦</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-4">
            <CheckCircle2 className="w-12 h-12 text-[#ff3399]" strokeWidth={1.5} />
            <h1 className="text-5xl md:text-6xl font-bold tracking-wider uppercase italic" style={{ color: '#ffffff' }}>
              CLEANING CHECKLIST
            </h1>
            <CheckCircle2 className="w-12 h-12 text-[#ff3399]" strokeWidth={1.5} />
          </div>

          <p className="text-center text-white text-sm md:text-base tracking-widest uppercase">
            KAIRO SECURITY LTD ✓ Checklist
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-white rounded-2xl p-6 bg-transparent hover:border-[#ff3399] transition-all duration-300 group"
            >
              {/* Card Title */}
              <h2 className="text-xl md:text-2xl font-bold uppercase italic tracking-wide mb-4 text-white group-hover:text-[#ff3399] transition-colors duration-300">
                {card.title}
              </h2>

              {/* Accent Text */}
              {card.accentText && (
                <p className="text-[#ff3399] text-sm font-semibold mb-4 italic">
                  {card.accentText}
                </p>
              )}

              {/* Checklist Items */}
              <ul className="space-y-3">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="mt-1.5 min-w-fit">
                      <div className="w-2 h-2 rounded-full bg-[#ff3399]"></div>
                    </div>
                    <span className="text-white text-sm md:text-base font-light leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CleaningChecklist;
