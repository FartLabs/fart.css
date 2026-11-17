/**
 * Copies the files css.fart.tools serves into `dist/`, the Worker's static
 * assets directory. The CSS sources are published as-is; `components/`,
 * `codegen/`, and the rest of the repository are not served.
 *
 * Usage: `deno task build:worker`
 */

import { copy, emptyDir } from "@std/fs";

const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);

await emptyDir(dist);
// Keep build output out of version control without touching the root ignore.
await Deno.writeTextFile(new URL(".gitignore", dist), "*\n");

const files = [
  "index.html",
  "fart.css",
  "fonts.css",
  "keyframes.css",
  "misc.css",
  "root.css",
  "semantics.css",
  "llms.txt",
  "bookcover.png",
];
for (const file of files) {
  await Deno.copyFile(new URL(file, root), new URL(file, dist));
}
await copy(new URL("tubes/", root), new URL("tubes/", dist), {
  overwrite: true,
});

console.log(`Built dist/ with ${files.length} files and tubes/`);
