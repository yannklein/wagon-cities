export default function(state = null, action) {
  switch (action.type) {
    case "SET_ACTIVE_CITY": {
      return state;
    }
    case "GET_CITIES": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
