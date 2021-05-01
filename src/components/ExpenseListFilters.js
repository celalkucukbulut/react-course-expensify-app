import React from 'react';
import { DateRangePicker } from 'react-dates';
import {connect} from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component{
    state = {
        calenderFocused : null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    };
    OnTextChange = (e) => {
      this.props.setTextFilter(e.target.value);
    };
    OnSortChange = (e) => {
      if(e.target.value === "amount") 
          this.props.sortByAmount();
      else if(e.target.value === "date") {
          this.props.sortByDate();
      }
    };
    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.OnTextChange} 
                />
                <select value={this.props.filters.sortBy} onChange={this.OnSortChange}>
                    <option value = "date">Date</option>
                    <option value = "amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calenderFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    showClearDates = {true}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
  filters : state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter : (text) => dispatch(setTextFilter(text)),
  sortByDate : () => dispatch(sortByDate()),
  sortByAmount : () => dispatch(sortByAmount()),
  setStartDate : (startDate) => dispatch(setStartDate(startDate)),
  setEndDate : (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);
