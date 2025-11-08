import { SPAN } from "@fartlabs/htx/span";

/**
 * ShakeProps are the properties of the Shake component.
 */
export interface ShakeProps
  extends Exclude<Parameters<typeof SPAN>[0], undefined> {
}

/**
 * Shake is a span element with a Fart.css shake animation on hover.
 *
 * @example
 * ```tsx
 * import { Shake } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <Shake>
 *     Hover me to shake!
 *   </Shake>
 * );
 * ```
 *
 * @example
 * ```tsx
 * import { Shake } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <h1>
 *     Welcome to <Shake>Fart.css</Shake>
 *   </h1>
 * );
 * ```
 *
 * @see https://css.fart.tools#fart-logo
 */
export function Shake(props: ShakeProps): string {
  return (
    <SPAN
      {...props}
      class={`fart-logo${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </SPAN>
  );
}

export { SPAN };
