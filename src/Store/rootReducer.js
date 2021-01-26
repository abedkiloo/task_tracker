import { combineReducers } from "redux";
import posts2Reducer from "./posts/reducers"

const rootReducer = combineReducers({
    "posts": posts2Reducer
})

export default rootReducer