import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('correctly render expenses summary for a single expense', () =>{
  const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('correctly render expenses summary for a multiple expenses', () =>{
  const wrapper = shallow(<ExpensesSummary expenseCount = {23} expensesTotal={23312325} />);
  expect(wrapper).toMatchSnapshot();
});
