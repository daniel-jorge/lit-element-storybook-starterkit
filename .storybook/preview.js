import { addDecorator, addParameters, configure, setCustomElements } from '@storybook/web-components';

import { withTests } from '@storybook/addon-jest';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import results from '../.gen/jest-test-results.json';
import customElements from '../.gen/custom-elements.json';

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(
  withTests({
    results,
  })
);

const ROOT_ORDER = ['introduction', 'documentations', 'components'];
const INTRODUCTION_ORDER = ['readme', 'changelog', 'contributing', 'todo'];

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,

    storySort: (a, b) => {
      const [aRoot, aSection] = a[0].split('-');
      const [bRoot, bSection] = b[0].split('-');
      if (aRoot === bRoot) {
        if (aRoot === 'introduction') {
          const aIdx = INTRODUCTION_ORDER.indexOf(aSection);
          const bIdx = INTRODUCTION_ORDER.indexOf(bSection);
          return aIdx > bIdx ? 1 : -1;
        }
        return aSection === bSection ? 0 : aSection.localeCompare(bSection, undefined, { numeric: true });
      }
      const aIdx = ROOT_ORDER.indexOf(aRoot);
      const bIdx = ROOT_ORDER.indexOf(bRoot);
      return aIdx > bIdx ? 1 : -1;
    },
  },
  a11y: {
    restoreScroll: true,
  }
});

// Temporary patch for default values and redundancy
function addDefaultValue (def) {
  def.defaultValue = def.default;
}

customElements.tags.forEach((tagDefinition) => {
  (tagDefinition.attributes || []).forEach((def) => addDefaultValue(def));
  (tagDefinition.properties || []).forEach((def) => addDefaultValue(def));
});

setCustomElements(customElements);

const docStories = require.context('../docs', true, /\.stories\.(ts|mdx)$/);
const componentStories = require.context('../packages', true, /\.stories\.(ts|mdx)$/);
configure([componentStories, docStories], module);
if (module.hot) {
  module.hot.accept([componentStories.id, docStories.id], () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
