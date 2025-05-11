import { HR } from "@fartlabs/htx/hr";

/**
 * HorizontalRuleProps are the properties of the HorizontalRule component.
 */
export interface HorizontalRuleProps
  extends Exclude<Parameters<typeof HR>[0], undefined> {
}

/**
 * HorizontalRule is a span element with a Fart.css horizontal rule style.
 *
 * @see https://css.fart.tools#fart-hr
 */
export function HorizontalRule(props: HorizontalRuleProps): string {
  return (
    <HR
      {...props}
      class={`fart-horizontal-rule${props.class ? ` ${props.class}` : ""}`}
    />
  );
}

export { HR };
