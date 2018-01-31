import { createStore, applyMiddleware } from 'redux';

const initialState = {
  currentInput: '',
  users: []
};

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      return {currentInput: action.currentInput, users: action.users};
    default:
      return state;
    }
  return state;
}

const store = createStore(reducer);

export default store;