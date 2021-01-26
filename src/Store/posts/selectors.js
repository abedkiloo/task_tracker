export function getPosts(state){
    return state.postsReducer.posts
}

export function getPostStatus(state){
    return state.postsReducer.postsIsFetched
}