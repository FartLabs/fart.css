import { SECTION } from "@fartlabs/htx/section";

/**
 * SectionProps are the properties of the Section component.
 */
export interface SectionProps
  extends Exclude<Parameters<typeof SECTION>[0], undefined> {
}

/**
 * Section is a section element with a Fart.css style.
 *
 * @see https://css.fart.tools#fart-section
 */
export function Section(props: SectionProps): string {
  return (
    <SECTION
      {...props}
      class={`fart-section${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </SECTION>
  );
}

export { SECTION };
