import { expandGlob } from "@std/fs";
import { parse } from "deno_css";

if (import.meta.main) {
    const files = expandGlob("*.css");
    for await (const file of files) {
        const css = await Deno.readTextFile(file.path);
        const ast = parse(css);
        console.dir(ast, { depth: Infinity });
    }

    await Deno.writeTextFile("index.html", renderHTML());
}

export function renderHTML(): string {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>fart.css</title>
    <meta name="description" content="fart.css is a CSS library." />
    <link rel="stylesheet" href="/" />
  </head>
  <body>
    <section class="fart-section">
      <h1>fart.css</h1>
      <p>
        fart.css is a CSS library of styles reusable across fart-tastic
        frontends.
      </p>
    </section>
  </body>
</html>`;
}
