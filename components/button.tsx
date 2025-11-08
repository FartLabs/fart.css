import { A } from "@fartlabs/htx/a";
import { BUTTON } from "@fartlabs/htx/button";

/**
 * ButtonProps are the properties of the Button component.
 */
export type ButtonProps<T extends "a" | "button" = "a"> = T extends "a"
  ? Parameters<typeof A>[0] & { as?: T; disabled?: boolean }
  : Parameters<typeof BUTTON>[0] & { as: T };

/**
 * Button is a button element with a Fart.css style.
 *
 * @see https://css.fart.tools#buttons
 */
export function Button<T extends "a" | "button" = "a">(
  props: ButtonProps<T>,
): string {
  const type = props.as ?? "a";
  const classes = `fart-button${props.class ? ` ${props.class}` : ""}`;
  if (type === "a") {
    const anchorProps = props as Parameters<typeof A>[0] & {
      disabled?: boolean;
    };
    return (
      <A {...anchorProps} class={classes}>
        {anchorProps.children}
      </A>
    );
  }

  const buttonProps = props as Parameters<typeof BUTTON>[0] & { as: "button" };
  return (
    <BUTTON {...buttonProps} class={classes}>
      {buttonProps.children}
    </BUTTON>
  );
}

export { A, BUTTON };
