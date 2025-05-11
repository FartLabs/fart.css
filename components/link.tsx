import { A } from "@fartlabs/htx/a";

/**
 * LinkProps are the properties of the Link component.
 */
export interface LinkProps extends Exclude<Parameters<typeof A>[0], undefined> {
  /**
   * variant is a string that can be "visible-on-hover" or undefined.
   */
  variant?: "visible-on-hover";
}

/**
 * Link is an anchor element with a Fart.css style.
 *
 * @see https://css.fart.tools#links
 */
export function Link(props: LinkProps): string {
  return (
    <A
      {...props}
      class={`fart-link${
        props.variant === "visible-on-hover"
          ? " fart-link-visible-on-hover"
          : ""
      }${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </A>
  );
}

export { A };
