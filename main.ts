import { serveDir } from "@std/http";
import { appendCSS } from "./lib/css/append-css.ts";
import { checkHalloweenWeek } from "./lib/css/halloween.ts";
import { checkDecemberJanuary } from "./lib/css/december-january.ts";

if (import.meta.main) {
  Deno.serve(async (request) => {
    const url = new URL(request.url);
    if (
      (url.pathname === "/" ||
        url.pathname === "/fart.css") &&
      request.headers.get("Accept")?.includes("text/css")
    ) {
      const fartCSS = await Deno.readTextFile("fart.css");
      if (url.searchParams.has("no-theme")) {
        return new Response(
          fartCSS,
          { headers: new Headers({ "Content-Type": "text/css" }) },
        );
      }

      const modifiedFartCSS = appendCSS(
        fartCSS,
        [
          {
            css: '@import "halloween.css";\n',
            test: (date) =>
              checkHalloweenWeek(date) || url.searchParams.has("halloween"),
          },
          {
            css: '@import "december-january.css";\n',
            test: (date) =>
              checkDecemberJanuary(date) ||
              url.searchParams.has("december-january"),
          },
        ],
      );

      return new Response(
        modifiedFartCSS,
        {
          headers: new Headers({ "Content-Type": "text/css" }),
        },
      );
    }

    return await serveDir(request);
  });
}
