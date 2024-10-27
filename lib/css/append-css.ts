/**
 * appendCSS appends CSS based on the given date.
 */
export function appendCSS(
  css: string,
  tests: Array<{ css: string; test: (date: Date) => boolean }>,
  date: Date = new Date(),
): string {
  return tests.reduce(
    (result, { css, test }) => test(date) ? result + css : result,
    css,
  );
}
