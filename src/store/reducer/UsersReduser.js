import { CHANGE_TOKEN_VALID, SIGN_IN } from "../typeList";

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, user: action.payload, tokenIsValide: true };
    case CHANGE_TOKEN_VALID:
      return { ...state, tokenIsValide: !state.tokenIsValide };
    default:
      return state;
  }
};
export default UsersReducer;
