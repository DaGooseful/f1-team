import { html, fixture, expect } from '@open-wc/testing';
import "../f1-team.js";

describe("F1Team test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <f1-team
        title="title"
      ></f1-team>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
