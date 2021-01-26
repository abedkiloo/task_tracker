import JsonPlaceHolder from "./services";
import * as actionTypes from "./actionTypes";



export const fetchPosts = ()=>{
    return (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_POSTS_REQUESTED
        })

        return JsonPlaceHolder.getPosts()
            .then(response=>{
                if (response.status === 200){
                    response.data.then((post)=>{
                        dispatch({
                            type: actionTypes.FETCH_POSTS_SUCCEEDED,
                            payload: { post }
                        });
                    })
                }else{
                    dispatch({
                        type : actionTypes.FETCH_POSTS_FAILED,
                        payload: {
                            message: "An error occurred while fetching posts. please retry",
                        }
                    })
                }
            })
            .catch(()=>{
                dispatch({
                    type: actionTypes.FETCH_POSTS_DISCONNECTED,
                    payload : {
                        message: "Unable to conenect to internet. Please check your internet",
                    }
                })
            })

    }
}