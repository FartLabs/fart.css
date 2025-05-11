import { serveDir } from "@std/http/file-server";
import { accepts } from "@std/http/negotiation";

const fartCss = await Deno.readTextFile("fart.css");

export default {
  fetch(request) {
    const url = new URL(request.url);
    if (
      url.pathname === "/" &&
      request.method === "GET" &&
      accepts(request).includes("text/css")
    ) {
      return new Response(fartCss, {
        headers: new Headers({ "Content-Type": "text/css" }),
      });
    }

    return serveDir(request);
  },
} satisfies Deno.ServeDefaultExport;
