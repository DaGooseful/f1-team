import { LitElement, html, css } from "lit";

export class FakeF1Gallery extends LitElement {
  static get properties() {
    return {
      images: { type: Array }
    };
  }

  constructor() {
    super();
    this.images = [];
  }

  render() {
    return html`<div class="box">Gallery Component</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-gallery", FakeF1Gallery);
//Gallery which would load image from a .json file, might use the old lotus f1 car as picture