import { LitElement, html, css } from "lit";

export class FakeF1Button extends LitElement {
  static get properties() {
    return {
      label: { type: String }
    };
  }

  constructor() {
    super();
    this.label = "More Info";
  }

  render() {
    return html`<button>${this.label}</button>`;
  }

  static get styles() {
    return css`button { padding: 8px 16px; }`;
  }
}

customElements.define("fake-f1-button", FakeF1Button);


//button for more infos