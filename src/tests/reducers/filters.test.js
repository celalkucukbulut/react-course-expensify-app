import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('sort by amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('sort by date', () => {
  const currenctState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'

  };
  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currenctState, action);
  expect(state.sortBy).toBe('date');
});


test('text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'deneme' });
  expect(state.text).toBe('deneme');
});


test('startDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0).valueOf() });
  expect(state.startDate).toBe(moment(0).valueOf());
});


test('endDate filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0).valueOf() });
  expect(state.endDate).toBe(moment(0).valueOf());
});
