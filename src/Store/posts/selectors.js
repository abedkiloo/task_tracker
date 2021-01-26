// export function getPosts(state){
//     return state.postsReducer.posts
// }

// export function getPostStatus(state){
//     return state.postsReducer.postsIsFetched
// }

export const getFetchPostsProcess = ({postsReducer}) =>{ 
    return postsReducer.fetchPostsProcess
};
export const getPosts = ({postsReducer}) => {
    return postsReducer.posts
};