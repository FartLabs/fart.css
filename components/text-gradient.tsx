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
 * @see https://css.fart.tools#text-gradient
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
