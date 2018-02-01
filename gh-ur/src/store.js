const initialState = {
  currentInput: '',
  users: [],
  activeUser: null,
  fetchedUser: {},
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
    case 'FETCH_USER':
      return {...state, fetchedUser: action.fetchedUser};
    case 'FETCH_REPOS':
      return {...state, fetchedRepos: action.fetchedRepos};
    case 'TRIGGER_BUTTON':
      return {...state, isTriggered: action.isTriggered, fetchedUser: action.fetchedUser,
      fetchedRepos: action.fetchedRepos};
    default:
      return state;
    }
}

//const store = createStore(reducer);

export default reducer;