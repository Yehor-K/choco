const initialState = {
  allChoco: [],
  loading: false,
  error: false
};

const reducerChocos = (state = initialState, action) => {
  switch (action.type) {
    case "requestChoco": {
      return {
        ...state,
        loading: true,
      };
    }
    case "requestChocosSuccessful": {
      return {
        ...state,
        allChoco: action.payload.chocos,
      };
    }
    case "requestChocosFailed": {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default reducerChocos;