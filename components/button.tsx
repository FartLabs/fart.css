import { A } from "@fartlabs/htx/a";
import { BUTTON } from "@fartlabs/htx/button";

/**
 * ButtonProps are the properties of the Button component.
 */
export type ButtonProps<T extends "a" | "button"> = T extends "a"
  ? Parameters<typeof A>[0] & { as?: T }
  : T extends "button" ? Parameters<typeof BUTTON>[0] & { as: T }
  : never;

/**
 * Button is a button element with a Fart.css style.
 *
 * @see https://css.fart.tools#buttons
 */
export function Button<T extends "a" | "button" = "a">(
  props: ButtonProps<T>,
): string {
  const modifiedProps: ButtonProps<T> = {
    ...props,
    class: `fart-button${props.class ? ` ${props.class}` : ""}`,
  };

  switch (props.as ?? "a") {
    case "a": {
      return <A {...modifiedProps} />;
    }

    case "button": {
      return <BUTTON {...modifiedProps} />;
    }

    default: {
      throw new Error("Invalid button type");
    }
  }
}

export { A, BUTTON };
