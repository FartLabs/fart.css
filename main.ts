import { serveDir } from "@std/http";
import { appendHalloweenCSS } from "./halloween.ts";

Deno.serve(async (request) => {
  const url = new URL(request.url);
  if (
    (url.pathname === "/" ||
      url.pathname === "/fart.css") &&
    request.headers.get("Accept")?.includes("text/css")
  ) {
    const fartCSS = appendHalloweenCSS(await Deno.readTextFile("fart.css"));
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
