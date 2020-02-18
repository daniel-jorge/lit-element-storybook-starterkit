import { customElement, html, property, CSSResult, css, LitElement } from 'lit-element';

import * as icons from './icons';

/**
 * A mini weather component with icon, temperature and unit.
 *
 * The weather icons were made by <a href="https://www.flaticon.com/authors/prosymbols" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
 *
 * The component has a max width of 280px.
 */
@customElement('mini-weather-card')
class NumericKpiWidget extends LitElement {
  /**
   * The label (ex: location)
   */
  @property({ type: String })
  label = '';
  /**
   * The unit of temperature
   */
  @property({ type: String })
  unit = '';
  /**
   * The background color
   *
   * Values: `dark`|`primary`|`secondary`|`success`|`warning`|`danger`
   */
  @property({ type: String })
  color = 'dark';
  /**
   * The weather icon
   *
   * Values: `sun`|`rain`|`snow`|`cloudy`
   */
  @property({ type: String })
  icon = '';
  /**
   * The temperature value
   */
  @property({ type: Number })
  temperature = 0;

  static get styles(): CSSResult[] {
    return [
      css`
        :host {
          display: block;
          box-sizing: border-box;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          max-width: 280px;
        }
        .icon {
          opacity: 1;
          height: 4rem;
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          padding-right: 1rem;
          margin-right: 1rem;
        }
        .icon > svg {
          fill: white;
          height: 100%;
        }
        .label {
          opacity: 1;
          font-size: 1rem;
        }
        .value {
          font-size: 4rem;
          line-height: 0.8;
        }
        .unit {
          opacity: 0.5;
          font-size: 4rem;
          line-height: 0.8;
        }
      `,
    ];
  }

  render() {
    const bgColor = `bg-${this.color}`;
    return html`
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
      <div class="d-flex p-3 justify-content-center align-items-center ${bgColor} rounded shadow">
        <div class="icon">${icons[this.icon]}</div>
        <div>
          <span class="label">${this.label}</span>
          <br />
          <span class="value">${this.temperature}</span>
          <span class="unit">${this.unit}</span>
        </div>
      </div>
    `;
  }
}

export default NumericKpiWidget;
