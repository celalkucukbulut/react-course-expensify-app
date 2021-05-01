import moment from 'moment';
import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate} from '../../actions/filters';


test('setStartDate test',() => {
    const aciton = setStartDate(moment(0));
    expect(aciton).toEqual({
        type : 'SET_START_DATE',
        startDate : moment(0)
    })
});

test('setEndDate test',() => {
    const aciton = setEndDate(moment(0));
    expect(aciton).toEqual({
        type : 'SET_END_DATE',
        endDate : moment(0)
    })
});

test('setTextFilter test',() => {
    const aciton = setTextFilter('asd');
    expect(aciton).toEqual({
        type : 'SET_TEXT_FILTER',
        text : 'asd'
    })
});

test('setTextFilter default test',() => {
    const aciton = setTextFilter();
    expect(aciton).toEqual({
        type : 'SET_TEXT_FILTER',
        text : ''
    })
});

test('sortByAmount  test',() => {
    expect(sortByAmount()).toEqual({
        type : 'SORT_BY_AMOUNT'
    })
});

test('sortByDate default test',() => {
    expect(sortByDate()).toEqual({
        type : 'SORT_BY_DATE'
    })
});