export const initialState = {
  user: null,
  facility: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "ADD_TO_FACILITY":
      return {
        ...state,
        facility: [...state.facility, action.item],
      };
    default:
      return state;
  }
};

export default reducer