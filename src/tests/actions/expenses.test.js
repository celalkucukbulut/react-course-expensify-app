import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense , editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData).then(() => done());
});

test('remove expense', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abc'
    });
});


test('edit expense', () => {
    const action = editExpense('123abc', {note : 'New Note'});
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : '123abc',
        updates : {
            note : 'New Note'
        }
    });
});

test('add expense', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : expenses[2]
    });
});

test('should add expense to database and sotre', (done) => {
  const store = createMockStore({});
  const expenseDefaultData = {
    description : '',
    amount : 0,
    note : '',
    createdAt : 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type : 'ADD_EXPENSE',
      expense : {
        id : expect.any(String),
        ...expenseDefaultData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaultData);
    done();
  });
});

test('setup set expense object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type : 'SET_EXPENSES',
    expenses
  });
});

test('fetch expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});