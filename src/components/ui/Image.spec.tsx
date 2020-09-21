import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Image from './Image';
import { AVATAR } from '../../Constants'

describe('Image Component', () => {

  describe('Snapshots', () => {
    it('Should render with default size', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Image source={AVATAR} />
      );
      expect(wrapper).toMatchSnapshot();
    });
    
    it('Should render with specific size', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Image source={AVATAR} layout={{ width: '200', height: '200' }}/>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render with only specific with', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Image source={AVATAR} layout={{ width: '200' }}/>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Should render with only specific height', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Image source={AVATAR} layout={{ height: '200' }}/>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});