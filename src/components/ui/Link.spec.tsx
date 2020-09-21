import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Link from './Link';

describe('Link Component', () => {

  describe('Snapshots', () => {
    it('Should render with only link', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Link link='google.com' />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render with link and message', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Link link='google.com' message='message'/>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});