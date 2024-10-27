import { serveDir } from "@std/http";
import { checkHalloweenWeek } from "./lib/css/halloween.ts";
import { appendCSS } from "./lib/css/append-css.ts";

Deno.serve(async (request) => {
  const url = new URL(request.url);
  if (
    (url.pathname === "/" ||
      url.pathname === "/fart.css") &&
    request.headers.get("Accept")?.includes("text/css")
  ) {
    const fartCSS = appendCSS(
      await Deno.readTextFile("fart.css"),
      [
        {
          css: '@import "halloween.css";\n',
          test: (date) =>
            checkHalloweenWeek(date) || url.searchParams.has("halloween"),
        },
      ],
    );

    return new Response(
      fartCSS,
      {
        headers: new Headers({
          "Content-Type": "text/css",
        }),
      },
    );
  }

  return await serveDir(request);
});
