import { DIV } from "@fartlabs/htx/div";

/**
 * ButtonGroupProps are the properties of the ButtonGroup component.
 */
export interface ButtonGroupProps
  extends Exclude<Parameters<typeof DIV>[0], undefined> {
}

/**
 * ButtonGroup is a div element that groups multiple buttons together with connected borders.
 *
 * @example
 * ```tsx
 * import { ButtonGroup, Button } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <ButtonGroup>
 *     <Button>First</Button>
 *     <Button>Second</Button>
 *     <Button>Third</Button>
 *   </ButtonGroup>
 * );
 * ```
 *
 * @see https://css.fart.tools#button-groups
 */
export function ButtonGroup(props: ButtonGroupProps): string {
  return (
    <DIV
      {...props}
      class={`fart-button-group${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </DIV>
  );
}

export { DIV };
