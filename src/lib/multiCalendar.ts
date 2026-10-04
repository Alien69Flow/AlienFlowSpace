// Hindu (Vikram Samvat, Kali Yuga, Shaka Samvat) and Hebrew (Luach) calendar utilities

export interface HinduYear {
  vikramSamvat: number;
  kaliYuga: number;
  shakaSamvat: number;
  era: string;
}

export interface HebrewYear {
  year: number;
  yearRange: string;
  month: string;
  day: number;
}

// Hindu calendar eras: Vikram Samvat = Gregorian + 57, Kali Yuga = Gregorian + 3101 (before Chaitra) or +3102
// Shaka Samvat = Gregorian - 78 (after Chaitra Shukla Pratipada)
const hinduNewYearApprox: Record<number, string> = {
  2025: '2025-03-30',
  2026: '2026-04-09',
  2027: '2027-03-29',
};

export function getHinduYear(date?: Date): HinduYear {
  const today = date || new Date();
  const gYear = today.getFullYear();
  const newYearStr = hinduNewYearApprox[gYear];
  let beforeNewYear = false;
  if (newYearStr) {
    const ny = new Date(newYearStr);
    if (today < ny) beforeNewYear = true;
  }

  const vikramSamvat = gYear + (beforeNewYear ? 56 : 57);
  const kaliYuga = gYear + (beforeNewYear ? 3101 : 3102);
  const shakaSamvat = gYear - (beforeNewYear ? 79 : 78);

  return {
    vikramSamvat,
    kaliYuga,
    shakaSamvat,
    era: 'Hindu',
  };
}

// Hebrew calendar: Hebrew year = Gregorian + 3760 (before Rosh Hashanah) or +3761 (after)
const roshHashanahApprox: Record<number, string> = {
  2025: '2025-09-23',
  2026: '2026-09-12',
  2027: '2027-10-02',
};

const hebrewMonths = [
  'Tishrei', 'Cheshvan', 'Kislev', 'Tevet', 'Shevat',
  'Adar', 'Nisan', 'Iyar', 'Sivan', 'Tammuz',
  'Av', 'Elul',
];

export function getHebrewYear(date?: Date): HebrewYear {
  const today = date || new Date();
  const gYear = today.getFullYear();
  const rhStr = roshHashanahApprox[gYear];
  let hebrewYear = gYear + 3760;
  let monthIdx = 0;

  if (rhStr) {
    const rh = new Date(rhStr);
    if (today >= rh) {
      hebrewYear = gYear + 3761;
    }
    const diffMs = today.getTime() - rh.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    monthIdx = Math.floor(diffDays / 30) % 12;
    if (monthIdx < 0) monthIdx += 12;
  }

  return {
    year: hebrewYear,
    yearRange: `${hebrewYear}–${hebrewYear + 1}`,
    month: hebrewMonths[monthIdx] || 'Tishrei',
    day: 1,
  };
}
