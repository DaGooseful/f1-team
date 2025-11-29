import { LitElement, html, css } from "lit";

export class FakeF1Driver extends LitElement {
  static get properties() {
    return {
      drivers: { type: Array }
    };
  }

  constructor() {
    super();
    this.drivers = [];
  }

  render() {
    return html`<div class="box">Driver Component</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-driver", FakeF1Driver);
//contain our drive infos