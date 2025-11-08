import { DIV } from "@fartlabs/htx/div";

/**
 * BorderTubeProps are the properties of the BorderTube component.
 */
export interface BorderTubeProps
  extends Exclude<Parameters<typeof DIV>[0], undefined> {
  color: TubeColor;
  glow?: boolean;
}

/**
 * TubeColor is the color variant for the BorderTube component.
 */
export type TubeColor =
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
 * @see https://css.fart.tools#border-tube
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
