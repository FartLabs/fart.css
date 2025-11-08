import { SPAN } from "@fartlabs/htx/span";

/**
 * TextGradientProps are the properties of the TextGradient component.
 */
export interface TextGradientProps
  extends Exclude<Parameters<typeof SPAN>[0], undefined> {
}

/**
 * TextGradient is a span element with a Fart.css text gradient style.
 *
 * @example
 * ```tsx
 * import { TextGradient } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <TextGradient>
 *     Gradient text effect
 *   </TextGradient>
 * );
 * ```
 *
 * @example
 * ```tsx
 * import { TextGradient } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <h1>
 *     Welcome to <TextGradient>Fart.css</TextGradient>
 *   </h1>
 * );
 * ```
 *
 * @see https://css.fart.tools#fart-text-gradient
 */
export function TextGradient(props: TextGradientProps): string {
  return (
    <SPAN
      {...props}
      class={`fart-text-gradient${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </SPAN>
  );
}

export { SPAN };
