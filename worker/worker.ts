/** The subset of the Workers static assets binding that the Worker uses. */
interface Env {
  ASSETS: { fetch(input: Request | URL | string): Promise<Response> };
}

/** Whether the request's `Accept` header lists `text/css`. */
function acceptsCss(request: Request): boolean {
  const accept = request.headers.get("Accept") ?? "";
  return accept
    .split(",")
    .some((type) => type.split(";")[0].trim().toLowerCase() === "text/css");
}

/**
 * Cloudflare Worker for css.fart.tools.
 *
 * Everything is a static asset. The one exception is `GET /`, which returns
 * the stylesheet itself when the client asks for `text/css`, so that
 * `<link href="https://css.fart.tools" rel="stylesheet">` works.
 */
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (
      url.pathname === "/" && request.method === "GET" && acceptsCss(request)
    ) {
      const css = await env.ASSETS.fetch(new URL("/fart.css", url));
      return new Response(css.body, {
        status: css.status,
        headers: { "Content-Type": "text/css" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
