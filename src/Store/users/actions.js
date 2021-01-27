import * as actionTypes from './actionTypes'
import UserPlaceHolder from './services'


export const fetchUsers = () =>{
    return (dispatch)=>{
        dispatch({type : actionTypes.FETCH_USERS_REQUESTED})

        UserPlaceHolder.getusers()
        .then((response)=>{
            if(response.status === 200){
                dispatch({
                    type: actionTypes.FETCH_USERS_SUCCEEDED,
                    payload: {users: response.data}
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_USERS_FAILED,
                    payload: {
                        message: "An error occurred while fetching users. please retry",
                    }
                })
            }
        })
        .catch((error)=>{
            dispatch({
                type: actionTypes.FETCH_USERS_DISCONNECTED,
                payload:{
                    message: "Unable to conenect to internet. Please check your internet",
                }
            })
        })

        }
}