import { serveDir, serveFile } from "@std/http";

Deno.serve(async (request) => {
  const url = new URL(request.url);
  if (
    url.pathname === "/" &&
    request.headers.get("Accept")?.includes("text/css")
  ) {
    return await serveFile(request, "fart.css");
  }

  return await serveDir(request);
});
