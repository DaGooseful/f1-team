import { LitElement, html, css } from "lit";

export class FakeF1Calendar extends LitElement {
  static get properties() {
    return {
      date: { type: String }
    };
  }

  constructor() {
    super();
    this.date = "";
  }

  render() {
    return html`<div class="box">Calendar Component</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-calendar", FakeF1Calendar);

//need to figure out what calendar to use, right now focusing on gogle calendar