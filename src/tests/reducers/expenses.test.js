import { act } from 'react-test-renderer';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('set default state', () => {
  const state = expensesReducer(undefined, {type : '@@INIT'});
  expect(state).toEqual([]);
});

test('set remove', () => {
  const action = {
    type : 'REMOVE_EXPENSE',
    id : expenses[1].id
  }
  const state = expensesReducer(expenses , action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('set not remove if id not foudn', () => {
  const action = {
    type : 'REMOVE_EXPENSE',
    id : '-1'
  }
  const state = expensesReducer(expenses , action);
  expect(state).toEqual(expenses);
});

test('set add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense : {
      id : 4,
      description : 'Gum4',
      note : 'notee',
      amount : 150,
      createdAt : 230
    }
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([...expenses,action.expense]);
});

test('set edit', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id : 3,
    updates : {
      description : 'EditedGum4',
      note : 'noteEdit',
      amount : 1500,
      createdAt : 2300
    }
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual([...expenses, ...action.updates]);
});

test('set not edit if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id : 4,
    updates : {
      description : 'EditedGum4',
      note : 'noteEdit',
      amount : 1500,
      createdAt : 2300
    }
  };
  const state = expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});


test('set expenses', () => {
  const action = {
    type : 'SET_EXPENSES',
    expenses : [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});