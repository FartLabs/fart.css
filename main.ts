import { serveDir } from "@std/http/file-server";

const fartCss = await Deno.readTextFile("fart.css");

export default {
  fetch(request) {
    const url = new URL(request.url);
    if (
      url.pathname === "/" &&
      request.method === "GET" &&
      request.headers.get("Accept")?.includes("text/css")
    ) {
      return new Response(
        fartCss,
        { headers: new Headers({ "Content-Type": "text/css" }) },
      );
    }

    return serveDir(request);
  },
} satisfies Deno.ServeDefaultExport;
