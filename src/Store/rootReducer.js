import { combineReducers } from "redux";
import postsReducer from "./posts/reducers"

const rootReducer= combineReducers({
    postsReducer
})

export default rootReducer