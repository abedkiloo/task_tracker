import JsonPlaceHolder from "./services";
import * as actionTypes from "./actionTypes";



export const fetchPosts = ()=>{
    return (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_POSTS_REQUESTED
        })

         JsonPlaceHolder.getPosts()
            .then((response)=>{
                if (response.status === 200){
                    dispatch({
                        type: actionTypes.FETCH_POSTS_SUCCEEDED,
                        payload: {posts:response.data}
                    });
                    
                }else{
                    dispatch({
                        type : actionTypes.FETCH_POSTS_FAILED,
                        payload: {
                            message: "An error occurred while fetching posts. please retry",
                        }
                    })
                }
            })
            .catch((error)=>{
                dispatch({
                    type: actionTypes.FETCH_POSTS_DISCONNECTED,
                    payload : {
                        message: "Unable to conenect to internet. Please check your internet",
                    }
                })
            })

    }
}