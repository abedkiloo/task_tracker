import React from 'react'

export const PostItem = (props) => {
    return(
        <div>
            <span>{props.post.title}</span>
            <button 
                onClick={() =>{props.clickAction(props.post)}}>
                  view details 
            </button>
        </div>
    )
}

export default PostItem