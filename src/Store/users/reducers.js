import * as actionTypes from "./actionTypes"
const initialState={
    users:[],
    usersIsFetched: false
}
export default function usersReducer(state = initialState, action = {}) {

    switch (action.type) {
        case actionTypes.FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                usersIsFetched: true,
                users: action.payload.users
            }
        default:
            return state;
    }

}