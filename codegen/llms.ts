import TurndownService from "turndown";

export async function generateLlmsTxt() {
  const turndownService = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
  });

  // Read index.html
  const indexHtml = await Deno.readTextFile("index.html");

  // Extract main content from index.html (everything inside <main>)
  const mainMatch = indexHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  const mainContent = mainMatch ? mainMatch[1] : "";

  // Convert HTML to Markdown
  const markdown = turndownService.turndown(mainContent);

  // Build llms.txt content
  const llmsTxt = `# Fart.css

Fart.css is a CSS library of styles reusable across your ✨fart-tastic✨ frontends.

## Quick Start

Include the following line in the \`<head>\` of your HTML file:

\`\`\`html
<link rel="stylesheet" type="text/css" href="https://css.fart.tools">
\`\`\`

## Documentation

${markdown}

## Project Structure

- \`fart.css\` - Main CSS file that imports all other stylesheets
- \`root.css\` - CSS custom properties (variables) for colors, spacing, typography
- \`semantics.css\` - Styles for semantic HTML elements (headings, links, lists, etc.)
- \`misc.css\` - Miscellaneous utility classes (buttons, sections, headers, etc.)
- \`keyframes.css\` - CSS animation keyframes
- \`fonts.css\` - Font imports (Overpass from Google Fonts)
- \`tubes/\` - Border tube SVG assets and CSS
- \`components/\` - TypeScript/TSX component library for @fartlabs/htx
- \`index.html\` - Documentation website

## Links

- Website: https://css.fart.tools
- Source: https://github.com/FartLabs/fart.css
- JSR Package: https://jsr.io/@fartlabs/css
- Documentation: https://jsr.io/@fartlabs/css/doc
`;

  await Deno.writeTextFile("llms.txt", llmsTxt);
}
