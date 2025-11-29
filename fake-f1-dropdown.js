import { LitElement, html, css } from "lit";

export class FakeF1Dropdown extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.open = false;
  }

  render() {
    return html`<div class="box">Dropdown Menu</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-dropdown", FakeF1Dropdown);
//a dropdown menu that lead to other website