import { BUTTON } from "@fartlabs/htx/button";

/**
 * ButtonProps are the properties of the Button component.
 */
export interface ButtonProps
  extends Exclude<Parameters<typeof BUTTON>[0], undefined> {
}

/**
 * Button is a button element with a Fart.css style.
 *
 * @see https://css.fart.tools#buttons
 */
export function Button(props: ButtonProps): string {
  return (
    <BUTTON
      {...props}
      class={`fart-button${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </BUTTON>
  );
}

export { BUTTON };
