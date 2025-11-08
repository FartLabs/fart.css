import { A } from "@fartlabs/htx/a";

/**
 * ButtonLinkProps are the properties of the ButtonLink component.
 */
export interface ButtonLinkProps
  extends Exclude<Parameters<typeof A>[0], undefined> {
}

/**
 * ButtonLink is an anchor element with a Fart.css button style.
 *
 * @example
 * ```tsx
 * import { ButtonLink } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <ButtonLink href="/about">
 *     Learn More
 *   </ButtonLink>
 * );
 * ```
 *
 * @example
 * ```tsx
 * import { ButtonLink } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <ButtonLink href="https://example.com" target="_blank">
 *     External Link
 *   </ButtonLink>
 * );
 * ```
 *
 * @see https://css.fart.tools#buttons
 */
export function ButtonLink(props: ButtonLinkProps): string {
  return (
    <A
      {...props}
      class={`fart-button${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </A>
  );
}

export { A };
