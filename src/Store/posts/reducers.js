import * as types from "./actionTypes";
import Immutable from 'seamless-immutable';



const initialState = Immutable({
    posts:undefined,
    postsIsFetched:false
})

export default function postsReducer(state=initialState,action={}){
    switch(action.type){
        case types.POSTS_RECEIVED:
            return state.merge({
                posts:action.payload,
                postsIsFetched:true
            })

        default:
            return state
    }

}