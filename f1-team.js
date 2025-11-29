/**
 * Copyright 2025 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./fake-f1-header.js";
import "./fake-f1-dropdown.js";
import "./fake-f1-gallery.js";
import "./fake-f1-calendar.js";
import "./fake-f1-driver.js";
import "./fake-f1-result.js";
import "./fake-f1-news.js";
import "./fake-f1-button.js";
import "./fake-f1-footer.js";
import "./fake-f1-teams.js";

/**
 * `f1-team`
 * 
 * @demo index.html
 * @element f1-team
 */
export class F1Team extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "f1-team";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/f1-team.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--f1-team-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }


  render() {
    return html`
      <fake-f1-header></fake-f1-header>
      <fake-f1-dropdown></fake-f1-dropdown>

      <div class="wrapper">
        <h3><span>${this.t.title}:</span> ${this.title}</h3>
        <slot></slot>

        <fake-f1-gallery></fake-f1-gallery>
        <fake-f1-calendar></fake-f1-calendar>
        <fake-f1-driver></fake-f1-driver>
        <fake-f1-result></fake-f1-result>
        <fake-f1-news></fake-f1-news>
        <fake-f1-button label="More Info"></fake-f1-button>
      </div>

      <fake-f1-footer></fake-f1-footer>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(F1Team.tag, F1Team);

//List of stuff to focus for next week
//Figure out how to work the calendar out
//Figure out how to place everything into one .js file
//Figure out how we have have multiple page in index.html
//if not then we may need more than one .html, which will be painful for me
//focus more working time for satuerday and sunday next week, exam on firday would need more attention
//and find some picture from somewhere, idk ai image generator or something