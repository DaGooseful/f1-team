import { LitElement, html, css } from "lit";

export class FakeF1Footer extends LitElement {
  static get properties() {
    return {
      year: { type: Number }
    };
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  render() {
    return html`<div class="box">Footer © ${this.year}</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-footer", FakeF1Footer);
//footer with contact infos