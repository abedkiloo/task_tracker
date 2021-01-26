import * as actionTypes from "./actionTypes"
const initialState={
    users:[],
    usersIsFetched: false
}
export default  usersReducer= (state=initialState,actions={}) =>{

    switch(actions.type){
        case actionTypes.FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                usersIsFetched: true,
                users: actions.payload.users
            }
    }

}