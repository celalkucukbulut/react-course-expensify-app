import React from 'react';
import {shallow } from 'enzyme';
import {Login} from '../../components/Login';

test('render login page', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test('call startlogin onClick',() =>{
  const startLogin = jest.fn();
  const wrapper = shallow(<Login startLogin= {startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});