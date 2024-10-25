/**
 * checkHalloweenWeek checks if the date is within the week of Halloween.
 */
export function checkHalloweenWeek(date: Date = new Date()): boolean {
  const month = date.getMonth();
  const day = date.getDate();
  return month === 9 && day >= 25 && day <= 31;
}

/**
 * appendHalloweenCSS appends an import to the Halloween version file if it's
 * the week of Halloween.
 */
export function appendHalloweenCSS(
  css: string,
  isHalloweenWeek: boolean = checkHalloweenWeek(),
): string {
  if (isHalloweenWeek) {
    return css + `@import "halloween.css"\n`;
  }

  return css;
}
