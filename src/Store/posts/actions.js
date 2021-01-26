// export const FECTH_POSTS_REQUESTED="FECTH_POSTS_REQUESTED"
// export const FECTH_POSTS_SUCCEEDED="FECTH_POSTS_SUCCEEDED"
// export const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED"
// export const FETCH_POSTS_DISCONNECTED = "FETCH_POSTS_DISCONNECTED"

import * as types from "./actionTypes";
import JsonPlaceHolder from "./services";


export function fetchPosts(){
    return function(dispatch,getState){
        dispatch({type:types.POSTS_REQUESTED})
        return JsonPlaceHolder.getPosts()
        .then(posts=>{
            dispatch({type:types.POSTS_RECEIVED,payload:posts})
        })
        .catch(error =>{
            throw(error)
        })

    }
}