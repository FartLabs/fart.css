import { DIV } from "@fartlabs/htx/div";

/**
 * BorderTubeProps are the properties of the BorderTube component.
 */
export interface BorderTubeProps
  extends Exclude<Parameters<typeof DIV>[0], undefined> {
  /** color is the color variant for the border tube. */
  color: TubeColor;

  /**
   * glow is a boolean flag that determines if the border tube should glow.
   */
  glow?: boolean;
}

/**
 * TubeColor is the color variant for the BorderTube component.
 */
export type TubeColor =
  | "empty"
  | "blue"
  | "turquoise"
  | "purple"
  | "yellow"
  | "magenta"
  | "green"
  | "orange";

/**
 * BorderTube is a div element with a Fart.css border tube style.
 *
 * @example
 * ```tsx
 * import { BorderTube } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <BorderTube color="empty">
 *     <p>Content with an empty border tube</p>
 *   </BorderTube>
 * );
 * ```
 *
 * @example
 * ```tsx
 * import { BorderTube } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <BorderTube color="blue" glow>
 *     <p>Content with a blue glowing border tube</p>
 *   </BorderTube>
 * );
 * ```
 *
 * @example
 * ```tsx
 * import { BorderTube } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <BorderTube color="purple">
 *     <h1>Purple border tube without glow</h1>
 *   </BorderTube>
 * );
 * ```
 *
 * @see https://css.fart.tools#border-tubes
 */
export function BorderTube(props: BorderTubeProps): string {
  const className = `border-tube-${props.color}${props.glow ? " glow" : ""}`;
  return (
    <DIV
      {...props}
      class={`${className}${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children.join("")}
    </DIV>
  );
}

export { DIV };
