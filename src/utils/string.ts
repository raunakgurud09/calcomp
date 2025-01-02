export const getMonthDays = (month: string, year: string) => {
  // Normalize month to handle full name or abbreviation
  const monthIndex = new Date(`${month} 1, ${year}`).getMonth(); // Parse month index
  if (isNaN(monthIndex)) {
    throw new Error(`Invalid month: ${month}`);
  }

  const date = new Date(parseInt(year), monthIndex, 1);

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(); // Day index (0 = Sunday)
  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate(); // Last day in month
  const prevMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate(); // Last date in previous month

  return {
    firstDay: firstDay === 0 ? 7 : firstDay, // Adjust to ISO week (Monday = 1, Sunday = 7)
    lastDate,
    prevMonthLastDate,
  };
};
