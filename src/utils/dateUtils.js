export const getDays = (month, year, isEthiopian = false) => {
  if (isEthiopian) {
    if (month === 13) {
      return Array.from(
        { length: isEthLeapYear(year) ? 6 : 5 },
        (_, i) => i + 1
      );
    }
    return Array.from({ length: 30 }, (_, i) => i + 1);
  }
  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return Array.from({ length: daysInMonth[month - 1] }, (_, i) => i + 1);
};

export const isEthLeapYear = (year) => year % 4 === 3;
export const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const validateYear = (year) => {
  const minYear = 1900;
  const maxYear = new Date().getFullYear() + 10;
  return Math.min(Math.max(year, minYear), maxYear);
};

export const ethiopianMonths = [
  "1 - መስከረም / Meskerem",
  "2 - ጥቅምት / Tikimt",
  "3 - ኅዳር / Hidar",
  "4 - ታኅሳስ / Tahsas",
  "5 - ጥር / Tir",
  "6 - የካቲት / Yekatit",
  "7 - መጋቢት / Megabit",
  "8 - ሚያዝያ / Miyazya",
  "9 - ግንቦት / Ginbot",
  "10 - ሰኔ / Sene",
  "11 - ሐምሌ / Hamle",
  "12 - ነሐሴ / Nehase",
  "13 - ጳጉሜን / Pagumē",
];

export const gregorianMonths = [
  "1 - January",
  "2 - February",
  "3 - March",
  "4 - April",
  "5 - May",
  "6 - June",
  "7 - July",
  "8 - August",
  "9 - September",
  "10 - October",
  "11 - November",
  "12 - December",
];
