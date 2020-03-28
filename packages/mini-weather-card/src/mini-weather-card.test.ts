import './mini-weather-card';
import { TestUtils } from '../../../utils/test-utils';

afterEach(() => {
  // The jsdom instance is shared across test cases in a single file so reset the DOM
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
});

describe('<mini-weather-card />', () => {
  it('should render', async () => {
    TestUtils.render('<mini-weather-card />');
    const miniWeatherCard = await TestUtils.waitForElement('mini-weather-card');
    expect(miniWeatherCard).not.toBeNull();
  });

  it('should render unit', async () => {
    TestUtils.render('<mini-weather-card unit="UNIT_VALUE" />');
    const miniWeatherCard = await TestUtils.waitForElement('mini-weather-card');
    expect(miniWeatherCard.shadowRoot!.innerHTML).toMatch(/UNIT_VALUE/);
  });

  it('should render label', async () => {
    TestUtils.render('<mini-weather-card unit="LABEL_VALUE" />');
    const miniWeatherCard = await TestUtils.waitForElement('mini-weather-card');
    expect(miniWeatherCard.shadowRoot!.innerHTML).toMatch(/LABEL_VALUE/);
  });

  it('should render temperature', async () => {
    TestUtils.render('<mini-weather-card unit="TEMPERATURE_VALUE" />');
    const miniWeatherCard = await TestUtils.waitForElement('mini-weather-card');
    expect(miniWeatherCard.shadowRoot!.innerHTML).toMatch(/TEMPERATURE_VALUE/);
  });
});
