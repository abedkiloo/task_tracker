import { combineReducers } from "redux";
import postsReducer from "./posts/reducers"
import usersReducer from "./users/reducers"

const rootReducer = combineReducers({
    "posts": postsReducer,
    "users": usersReducer
})

export default rootReducer