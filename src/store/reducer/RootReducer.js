import { combineReducers } from "redux";
import FoundsReducer from "./FoundsPetsReduser";
import HomeReducer from "./HomeReducer";
import LostsReducer from "./LostsPetsReducer";
import UsersReducer from "./UsersReduser";

const RootReducer=combineReducers({
    users:UsersReducer,
    foundsPets:FoundsReducer,
    lostsPets:LostsReducer,
    posts:HomeReducer,
})
export default RootReducer