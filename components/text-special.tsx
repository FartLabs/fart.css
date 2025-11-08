import { SPAN } from "@fartlabs/htx/span";

/**
 * TextSpecialProps are the properties of the TextSpecial component.
 */
export interface TextSpecialProps
  extends Exclude<Parameters<typeof SPAN>[0], undefined> {
}

/**
 * TextSpecial is a span element with a slightly rotated Fart.css text style.
 *
 * @example
 * ```tsx
 * import { TextSpecial } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <TextSpecial>
 *     Rotated text effect
 *   </TextSpecial>
 * );
 * ```
 *
 * @example
 * ```tsx
 * import { TextSpecial } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <p>
 *     Normal text with <TextSpecial>special rotated</TextSpecial> emphasis.
 *   </p>
 * );
 * ```
 *
 * @see https://css.fart.tools#text-special
 */
export function TextSpecial(props: TextSpecialProps): string {
  return (
    <SPAN
      {...props}
      class={`fart-text-special${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </SPAN>
  );
}

export { SPAN };
