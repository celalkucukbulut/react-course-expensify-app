import React from 'react';
import { shallow } from 'enzyme';
import {EditExpense} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, startRemoveExpense, history;
beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpense 
    startRemoveExpense = {startRemoveExpense} 
    editExpense = {editExpense} 
    history={history} 
    expense={expenses[2]}
  />);
});

test('render edit Expense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('render startRemoveExpense expense ', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id : expenses[2].id
  });
});