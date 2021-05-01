import { createStore } from 'redux';

// Action Generators

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type : 'RESET'
});

const setCount = ({theCount}) => ({
    type : 'SET',
    theCount
});

//Reducer

// never change state or action
//it must be pure function
const countReducer = (state = { count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count : state.count - action.decrementBy
            };
        case 'SET':
            return {
                count : action.theCount
            };
        case 'RESET':
            return {
                count : 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});
// unsubscribe();

//Actions 
store.dispatch(incrementCount({incrementBy :5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({theCount :15} ));

