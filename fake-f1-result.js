import { LitElement, html, css } from "lit";

export class FakeF1Result extends LitElement {
  static get properties() {
    return {
      results: { type: Array }
    };
  }

  constructor() {
    super();
    this.results = [];
  }

  render() {
    return html`<div class="box">Results Table</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-result", FakeF1Result);
//result of races