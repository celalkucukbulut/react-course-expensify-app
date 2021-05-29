import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test ('header component', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
  
  // expect(wrapper.find('h1').text()).toBe('Expensify');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('call startlogout onClick',() =>{
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout= {startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});