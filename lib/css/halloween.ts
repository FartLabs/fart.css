/**
 * checkHalloweenWeek checks if the date is within the week of Halloween.
 */
export function checkHalloweenWeek(date: Date = new Date()): boolean {
  const month = date.getMonth();
  const day = date.getDate();
  return month === 9 && day >= 25 && day <= 31;
}
