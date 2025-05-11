import { SPAN } from "@fartlabs/htx/span";

/**
 * HeaderProps are the properties of the Header component.
 */
export interface HeaderProps
  extends Exclude<Parameters<typeof SPAN>[0], undefined> {
}

/**
 * Header is a span element with a Fart.css header style.
 *
 * @see https://css.fart.tools#fart-header
 */
export function Header(props: HeaderProps): string {
  return (
    <SPAN
      {...props}
      class={`fart-header${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </SPAN>
  );
}

export { SPAN };
