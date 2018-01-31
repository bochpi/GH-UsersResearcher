import { createStore, applyMiddleware } from 'redux';

const initialState = {
  currentInput: '',
  users: [],
  activeUser: null
};

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      return {...state, currentInput: action.currentInput, users: action.users};
    case 'ACTIVE_USER':
      return {...state, activeUser: action.activeUser};
    default:
      return state;
    }
  return state;
}

const store = createStore(reducer);

export default store;