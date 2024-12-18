/**
 * checkDecemberJanuary checks if the date is within the months of December and January.
 */
export function checkDecemberJanuary(date: Date = new Date()): boolean {
  return date.getMonth() === 11 || date.getMonth() === 0;
}
