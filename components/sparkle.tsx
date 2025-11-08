import { SPAN } from "@fartlabs/htx/span";

/**
 * SparkleProps are the properties of the Sparkle component.
 */
export interface SparkleProps
  extends Exclude<Parameters<typeof SPAN>[0], undefined> {
}

/**
 * Sparkle is a span element with a Fart.css sparkle effect.
 *
 * @see https://css.fart.tools#fart-sparkle
 */
export function Sparkle(props: SparkleProps): string {
  return (
    <SPAN
      {...props}
      class={`fart-sparkle${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </SPAN>
  );
}

export { SPAN };
