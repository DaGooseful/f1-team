import { LitElement, html, css } from "lit";

export class FakeF1Header extends LitElement {
  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "Fake F1 Header";
  }

  render() {
    return html`<div class="box">${this.title}</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-header", FakeF1Header);
//header, gonna put the light and dark mode toggle here