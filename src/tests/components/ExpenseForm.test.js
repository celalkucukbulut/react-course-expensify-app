import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Expense Form', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Expense Form with data', () => {
  const wrapper = shallow(<ExpenseForm expense = { expenses[1] }/>);
  expect(wrapper).toMatchSnapshot();
});

test('render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault : () => { }
  });
  expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('set description on input change', () => {
  const value = 'New Desc';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target : { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('set Note on textarea change', () => {
  const value = 'new Note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').at(0).simulate('change', {
    target : {value}
  });
  expect(wrapper.state('note')).toBe(value);
});

test('set valid amount on input change', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target : {value}
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('set invalid amount on input change', () => {
  const value = '12.231';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target : {value}
  });
  expect(wrapper.state('amount')).toBe('');
});

test('OnSubmit for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault : () => { }
  });
  expect(wrapper.state('errorMessage')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description : expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('new date on change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('calenderFocus', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calenderFocused')).toBe(focused);
});