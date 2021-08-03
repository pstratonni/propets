import { FETCH_POSTS, FETCH_POST_BY_ID, LIKE_POST } from "../typeList";

const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ...action.payload };
    case FETCH_POST_BY_ID:
      return { ...state, postbyId: action.payload };
    case LIKE_POST:
      return { ...state, ...state.payload };
    default:
      return state;
  }
};
export default HomeReducer;
