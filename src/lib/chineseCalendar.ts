// Chinese Calendar utilities for calculating zodiac year, animal, and element

export interface ChineseYear {
  year: number;
  animal: string;
  element: string;
  color: string;
  icon: string; // emoji or symbol
}

const animals = [
  { name: 'Rat', icon: '🐀' },
  { name: 'Ox', icon: '🐂' },
  { name: 'Tiger', icon: '🐅' },
  { name: 'Rabbit', icon: '🐇' },
  { name: 'Dragon', icon: '🐉' },
  { name: 'Snake', icon: '🐍' },
  { name: 'Horse', icon: '🐴' },
  { name: 'Goat', icon: '🐐' },
  { name: 'Monkey', icon: '🐵' },
  { name: 'Rooster', icon: '🐓' },
  { name: 'Dog', icon: '🐕' },
  { name: 'Pig', icon: '🐖' }
];

const elements = [
  { name: 'Wood', color: '#22C55E' },    // Green
  { name: 'Fire', color: '#EF4444' },    // Red
  { name: 'Earth', color: '#F59E0B' },   // Orange/Yellow
  { name: 'Metal', color: '#D1D5DB' },   // Gray/Silver
  { name: 'Water', color: '#3B82F6' }    // Blue
];

// Chinese New Year dates for accurate year calculation
const chineseNewYearDates: { [key: number]: string } = {
  2024: '2024-02-10',
  2025: '2025-01-29',
  2026: '2026-02-17',
  2027: '2027-02-06',
  2028: '2028-01-26',
  2029: '2029-02-13',
  2030: '2030-02-03'
};

export function getChineseYear(gregorianYear: number, currentDate?: Date): ChineseYear {
  const today = currentDate || new Date();
  const cnyDateStr = chineseNewYearDates[gregorianYear];
  
  // Determine if we're before or after Chinese New Year
  let effectiveYear = gregorianYear;
  if (cnyDateStr) {
    const cnyDate = new Date(cnyDateStr);
    if (today < cnyDate) {
      // Before CNY, use previous year's zodiac
      effectiveYear = gregorianYear - 1;
    }
  }
  
  const chineseYear = effectiveYear + 2698;
  
  // Standard Heavenly Branches: (year - 4) % 12
  const animalIndex = (effectiveYear - 4) % 12;
  const animal = animals[animalIndex];
  
  // Standard Heavenly Stems: pairs map to Wood/Fire/Earth/Metal/Water
  const elementIndex = Math.floor(((effectiveYear - 4) % 10) / 2);
  const element = elements[elementIndex];
  
  return {
    year: chineseYear,
    animal: animal.name,
    element: element.name,
    color: element.color,
    icon: animal.icon
  };
}

export function getCurrentChineseYear(): ChineseYear {
  return getChineseYear(new Date().getFullYear());
}
