/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
// import "./card/card";

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('memory-grid')
export class Grid extends LitElement {
  static override styles = css``;

  @property({type: Object, attribute: true})
  items = []


  override render() {
    return html`<ul class="deck">
             ${map(this.items,                 
                  () => html`
                    <li class="card unmatched">
                    <i class="fa"></i>
                </li>
                  `,
                )}
                 
              </ul>`;
  }

  protected override createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'memory-grid': Grid;
  }
}
