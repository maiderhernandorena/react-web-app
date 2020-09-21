import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Text from './Text';

describe('Text Component', () => {

  describe('Snapshots', () => {
    it('Should render normal text', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Text message='message' />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render title type text', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Text message='message' type='title'  />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render title type text', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Text message='message' type='subtitle'  />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render link type text', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Text message='message' type='link' link='google.com' />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});