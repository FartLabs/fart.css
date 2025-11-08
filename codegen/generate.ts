import { generateTubes } from "./tubes.ts";
import { generateLlmsTxt } from "./llms.ts";

const directory = "tubes";

if (import.meta.main) {
  await generateTubes(directory);
  await generateLlmsTxt();
}
