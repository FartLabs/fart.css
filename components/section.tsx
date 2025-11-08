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
 * @example
 * ```tsx
 * import { Section, Header } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <Section>
 *     <Header>Section Title</Header>
 *     <p>Section content goes here</p>
 *   </Section>
 * );
 * ```
 *
 * @example
 * ```tsx
 * import { Section } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <Section class="my-custom-class">
 *     <h2>Custom Section</h2>
 *     <p>This section has additional CSS classes</p>
 *   </Section>
 * );
 * ```
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
