import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Button from './ClassButton';

describe('Button Component', () => {

  describe('Snapshots', () => {
    it('Should render correctly with no label', () => {
      const mockFunc = jest.fn()

      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Button onPress={mockFunc} >
          <p>Any children</p>
        </Button>
      );
      expect(wrapper).toMatchSnapshot();
    });
    
    it('Should render correctly with no children', () => {
      const mockFunc = jest.fn()

      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Button onPress={mockFunc} label='Press me'/>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('Should return null with no label and chidlren', () => {
      const mockFunc = jest.fn()

      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <Button onPress={mockFunc} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});