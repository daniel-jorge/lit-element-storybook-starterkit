import { text, select } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import { storyBuilder } from '../../../utils/story-builder';

import './mini-weather-card';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const readme = require('../README.md');

const COLORS = ['dark', 'primary', 'secondary', 'success', 'warning', 'danger'];
const ICONS = ['sun', 'rain', 'snow', 'cloudy'];
const UNITS = ['°', '°C', '°F'];

export default {
  title: 'Components/<mini-weather-card>',
  component: 'mini-weather-card',
  parameters: {
    notes: readme,
  },
};

const containerDecorator = storyFn => html`
  <style>
    .container {
      display: flex;
    }
    .container > * {
      box-sizing: border-box;
      display: block;
      padding-right: 2rem;
      min-width: 280px;
    }
  </style>
  <div class="container">${storyFn()}</div>
`;

export const defaultStory = storyBuilder(() => {
  const value = text('value', '42');
  const label = text('label', 'Val de Fontenay');
  const color = select('color', COLORS, 'dark');
  const icon = select('icon', ICONS, 'rain');
  const unit = select('unit', UNITS, '°');
  return html`
    <mini-weather-card value=${value} unit=${unit} color=${color} icon=${icon} label=${label}></mini-weather-card>
  `;
})
  .withName('Default')
  .build();

export const colorStory = storyBuilder(() => {
  return html`
    ${COLORS.map(
      color =>
        html`
          <mini-weather-card value="42" unit="°" color=${color} icon="rain" label=${color}></mini-weather-card>
        `,
    )}
  `;
})
  .withName('Colors')
  .withDecorator(containerDecorator)
  .build();

export const iconStory = storyBuilder(() => {
  return html`
    ${['sun', 'rain', 'snow', 'cloudy'].map(
      icon =>
        html`
          <mini-weather-card value="42" unit="°" icon=${icon} label=${icon}></mini-weather-card>
        `,
    )}
  `;
})
  .withName('Icons')
  .withDecorator(containerDecorator)
  .build();
