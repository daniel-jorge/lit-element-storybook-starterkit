import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export class TestUtils {
  /**
   * Renders component document.body
   * @param {string} html to render
   */
  static render(htmlString: string) {
    const h = html`
      ${unsafeHTML(htmlString)}
    `;
    const wrapper = document.createElement('div');
    document.body.appendChild(wrapper);
    render(h, wrapper);
  }

  /**
   * Returns a promise which resolves as soon as
   * requested element becomes available or rejects if timeout is reached.
   * @param {string} selectors document.querySelector selectors
   * @param {number} timeout default is 2s
   * @returns {Promise<HTMLElement>}
   */
  static async waitForElement(selectors: string, timeout: number = 2000): Promise<Element> {
    const started = Date.now();
    return new Promise((resolve, reject) => {
      function requestComponent() {
        const element = document.querySelector(selectors);
        if (element) {
          resolve(element);
        } else {
          const now = Date.now();
          if (now - started > timeout) {
            reject(`Timed-out waiting for element <${selectors} />`);
            return;
          }
          window.requestAnimationFrame(requestComponent);
        }
      }
      requestComponent();
    });
  }
}
