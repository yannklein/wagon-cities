export default function(state = null, action) {
  switch (action.type) {
    case 'SET_ACTIVE_CITY': {
      return action.payload;
    }
    case 'GET_CITIES': {
      return state;
    }
    default: {
      return state;
    }
  }
}
