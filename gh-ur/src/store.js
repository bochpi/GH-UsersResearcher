const initialState = {
  currentInput: '',
  users: [],
  activeUser: null,
  fetchedRepos: {},
  isTriggered: false
};

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case 'HANDLE_INPUT_CHANGE':
      return {...state, currentInput: action.currentInput, users: action.users};
    case 'ACTIVE_USER':
      return {...state, activeUser: action.activeUser};
    case 'FETCH_REPOS':
      return {...state, fetchedRepos: action.fetchedRepos};
    case 'TRIGGER_BUTTON':
      return {...state, isTriggered: action.isTriggered, fetchedRepos: action.fetchedRepos};
    default:
      return state;
    }
  return state;
}

//const store = createStore(reducer);

export default reducer;