// Hindu (Vikram Samvat) and Hebrew (Luach) calendar utilities

export interface HinduYear {
  year: number;
  samvat: string;
  era: string;
}

export interface HebrewYear {
  year: number;
  month: string;
  day: number;
}

// Hindu Vikram Samvat: Gregorian year + 57 (varies slightly with month, ~56-57)
// For display purposes, the offset is +57 for dates after ~mid-April, +56 before
const hinduNewYearApprox: Record<number, string> = {
  2025: '2025-03-30', // Chaitra Shukla Pratipada (approx)
  2026: '2026-04-09',
  2027: '2027-03-29',
};

export function getHinduYear(date?: Date): HinduYear {
  const today = date || new Date();
  const gYear = today.getFullYear();
  const newYearStr = hinduNewYearApprox[gYear];
  let offset = 57;
  if (newYearStr) {
    const ny = new Date(newYearStr);
    if (today < ny) offset = 56;
  }
  const samvatYear = gYear + offset;
  return {
    year: samvatYear,
    samvat: 'Vikram Samvat',
    era: 'Hindu',
  };
}

// Hebrew calendar: Hebrew year = Gregorian + 3760 (before Jewish New Year) or +3761 (after)
// Jewish New Year (Rosh Hashanah) falls in Sept/Oct
const roshHashanahApprox: Record<number, string> = {
  2025: '2025-09-23',
  2026: '2026-09-12',
  2027: '2027-10-02',
};

// Hebrew months in civil order (Tishrei → Elul)
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
  let monthIdx = 0; // Tishrei by default

  if (rhStr) {
    const rh = new Date(rhStr);
    if (today >= rh) {
      hebrewYear = gYear + 3761;
    }
    // Approximate month index from Rosh Hashanah
    const diffMs = today.getTime() - rh.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    monthIdx = Math.floor(diffDays / 30) % 12;
    if (monthIdx < 0) monthIdx += 12;
  }

  return {
    year: hebrewYear,
    month: hebrewMonths[monthIdx] || 'Tishrei',
    day: 1, // Approximate — exact Hebrew day requires full calendar algorithm
  };
}
