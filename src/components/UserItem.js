import React from 'react'

export const UserItem = (props) => {
    return(
        <div>
            <span>{props.user.name}</span>
            <span>{props.user.email}</span>
            <button 
                onClick={() =>{props.clickAction(props.post)}}>
                  View user 
            </button>
        </div>
    )
}

export default UserItem