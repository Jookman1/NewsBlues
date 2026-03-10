export const themeColors = {
  deepBlack: '#050505',
  charcoal: '#0a0a0a',
  darkGray: '#0d0d0d',
  blueAccent: '#3B82F6',
  pinkAccent: '#CF66C4',
  white: '#ffffff',
};

export const hexagonPattern = {
  blue: `
    url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%233B82F6' opacity='0.05'/%3E%3C/svg%3E")
  `,
  pink: `
    url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23CF66C4' opacity='0.05'/%3E%3C/svg%3E")
  `,
};

export const getThemeClasses = (brand: 'kairosec' | 'kairoclean') => {
  const isKairoClean = brand === 'kairoclean';

  return {
    backgroundColor: themeColors.deepBlack,
    accentColor: isKairoClean ? themeColors.pinkAccent : themeColors.blueAccent,
    patternImage: isKairoClean ? hexagonPattern.pink : hexagonPattern.blue,
    cardBorderHover: isKairoClean
      ? 'hover:border-[#CF66C4] hover:border-opacity-60'
      : 'hover:border-blue-400 hover:border-opacity-60',
    textAccent: isKairoClean ? 'text-[#CF66C4]' : 'text-blue-400',
    shadowGlow: isKairoClean
      ? 'hover:shadow-[0_0_30px_rgba(207,102,196,0.2)]'
      : 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
  };
};

export const dotMatrixSvg = (color: string) => `
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="1.5" fill="${color}" opacity="0.04"/>
    <circle cx="20" cy="10" r="1.5" fill="${color}" opacity="0.04"/>
    <circle cx="30" cy="10" r="1.5" fill="${color}" opacity="0.04"/>
    <circle cx="10" cy="20" r="1.5" fill="${color}" opacity="0.04"/>
    <circle cx="20" cy="20" r="1.5" fill="${color}" opacity="0.04"/>
    <circle cx="30" cy="20" r="1.5" fill="${color}" opacity="0.04"/>
    <circle cx="10" cy="30" r="1.5" fill="${color}" opacity="0.04"/>
    <circle cx="20" cy="30" r="1.5" fill="${color}" opacity="0.04"/>
    <circle cx="30" cy="30" r="1.5" fill="${color}" opacity="0.04"/>
  </svg>
`;

export const getPatternBackground = (brand: 'kairosec' | 'kairoclean') => {
  const color = brand === 'kairoclean' ? '#CF66C4' : '#3B82F6';
  const patternUrl = `url("data:image/svg+xml,${encodeURIComponent(dotMatrixSvg(color))}")`;

  return {
    backgroundColor: themeColors.deepBlack,
    backgroundImage: patternUrl,
    backgroundSize: '40px 40px',
    backgroundAttachment: 'fixed',
  };
};
