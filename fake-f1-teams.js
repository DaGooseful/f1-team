import { LitElement, html, css } from "lit";

export class FakeF1Teams extends LitElement {
  static get properties() {
    return {
      teams: { type: Array }
    };
  }

  constructor() {
    super();
    this.teams = [];
  }

  render() {
    return html`<div class="box">Teams Component</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-teams", FakeF1Teams);
//info on team background