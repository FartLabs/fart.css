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
 * @see https://css.fart.tools#fart-logo
 */
export function Shake(props: ShakeProps): string {
  return (
    <SPAN
      {...props}
      class={`fart-logo ${props.class ? ` ${props.class}` : ""}`}
      class={`fart-logo${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </SPAN>
  );
}

export { SPAN };
