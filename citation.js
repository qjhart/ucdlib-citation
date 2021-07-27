/**
 * @license
 * Copyright 2021 UC Davis
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * A Citation Instance
 *
 */
export class Citation extends LitElement {

  static get properties() {
    return {
      title: {type: String },
      journal: {type: String },
      year: {type: Number },
      data: { type: Object },
      engine: {type: String }
    };
  }

  render() {
//    const vars=['title','journal'];
    const cite = {};
    const vars=Object.keys(Citation.properties)
    // First decode the data attribute
    if (this.data) {
      vars.forEach(i=>{this.data[i] && (cite[i]=this.data[i])});
    }
    // Individual attributes take president over data fields
    vars.forEach(i=>{this[i] && (cite[i]=this[i])});
    console.log(cite.title);
    return html`
      <h2>citation: ${cite.title}</h2>
        <i>${this.journal}</i>, <b>${cite.year}</b>
    `;
  }

}

window.customElements.define('ucdlib-citation', Citation);
