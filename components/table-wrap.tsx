import { DIV } from "@fartlabs/htx/div";

/**
 * TableWrapProps are the properties of the TableWrap component.
 */
export interface TableWrapProps
  extends Exclude<Parameters<typeof DIV>[0], undefined> {
}

/**
 * TableWrap is a div element that wraps tables for horizontal scrolling on mobile devices.
 *
 * @example
 * ```tsx
 * import { TableWrap } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <TableWrap>
 *     <table>
 *       <thead>
 *         <tr>
 *           <th>Header 1</th>
 *           <th>Header 2</th>
 *         </tr>
 *       </thead>
 *       <tbody>
 *         <tr>
 *           <td>Cell 1</td>
 *           <td>Cell 2</td>
 *         </tr>
 *       </tbody>
 *     </table>
 *   </TableWrap>
 * );
 * ```
 *
 * @example
 * ```tsx
 * import { TableWrap } from "jsr:@fartlabs/css";
 *
 * const html = (
 *   <TableWrap class="my-custom-class">
 *     <table>
 *       <thead>
 *         <tr>
 *           <th>Column 1</th>
 *           <th>Column 2</th>
 *         </tr>
 *       </thead>
 *       <tbody>
 *         <tr>
 *           <td>Data 1</td>
 *           <td>Data 2</td>
 *         </tr>
 *       </tbody>
 *     </table>
 *   </TableWrap>
 * );
 * ```
 *
 * @see https://css.fart.tools#tables
 */
export function TableWrap(props: TableWrapProps): string {
  return (
    <DIV
      {...props}
      class={`fart-table-wrap${props.class ? ` ${props.class}` : ""}`}
    >
      {props.children}
    </DIV>
  );
}

export { DIV };
