import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('selectExpense text', () => {
    const filters = {
        text : 't',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]])
});

test('selectExpense startDate', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0),
        endDate : undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]])
});

test('selectExpense endDate', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : moment(0)
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]])
});


test('selectExpense sort By date', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
});


test('selectExpense sort By amount', () => {
    const filters = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
});