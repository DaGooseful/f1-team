import { LitElement, html, css } from "lit";

export class FakeF1News extends LitElement {
  static get properties() {
    return {
      news: { type: Array }
    };
  }

  constructor() {
    super();
    this.news = [];
  }

  render() {
    return html`<div class="box">News Feed</div>`;
  }

  static get styles() {
    return css`.box { padding: 12px; border: 1px dashed #999; }`;
  }
}

customElements.define("fake-f1-news", FakeF1News);
//our news feed but with picture