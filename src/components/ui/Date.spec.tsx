import React from 'react';
import Renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import DateComponent from './Date';

describe('Date Component', () => {
  describe('Validate props', () => {

    it('Should render correctly with string format', () => {
      const renderer = Renderer.create(<DateComponent date='2020-10-19' />);
      const output = renderer.root;

      expect(output.props.date).toStrictEqual('2020-10-19');
    });    
  });

  describe('Snapshots', () => {
    it('Should render correctly with string format', () => {
      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <DateComponent date='2020-10-19' />
      );
      expect(wrapper).toMatchSnapshot();
    });
    
    it('Should render correctly with string format', () => {
      const date = new Date('2020-10-19')

      const shallowRenderer = ShallowRenderer.createRenderer();
      const wrapper = shallowRenderer.render(
        <DateComponent date={date} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});