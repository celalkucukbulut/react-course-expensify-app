import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const expenseData = {
        description : 'desc',
        note : 'note',
        amount :21,
        createdAt : 32 
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('add expense default', () => {
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            description : '',
            note : '',
            amount :0,
            createdAt : 0 ,
            id : expect.any(String)
        }
    });
});

