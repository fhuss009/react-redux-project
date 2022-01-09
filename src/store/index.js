import { createStore, dispatch } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "INCREASE_COUNTER":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "DECREASE_COUNTER":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "TOGGLE":
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
