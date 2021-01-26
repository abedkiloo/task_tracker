import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import actions and selectors from the Store folder
import * as postActions from "../Store/posts/actions"
import * as postSelectors from "../Store/posts/selectors"

//importing component
import PostItem from "../components/PostItem"

class PostPage extends Component{
     //when the component is mount, call the fetch post action
    componentDidMount(){
        this.props.postActions.fetchPosts()
    }

    //get alert from the  
    showPost(post){
        alert(post.body)
    }
    render(){
        return(
            <div>
            { 
                this.props.postsIsFetched ?(
                    <div>
                        {this.props.posts.map((post,i)=>{
                               return <PostItem key={i}
                                    post={post}
                                    clickAction={this.showPost}
                                />
                        })}
                    </div>
                ):
                (<h3>Loading .....</h3>)
            }
            </div>
        )
    }
}

//get the posts and the fetch status from the post selector
const mapStateToProps = (state,ownProps) => {
    return{
        postsIsFetched:postSelectors.getPostStatus(state),
        posts: postSelectors.getPosts(state)
    }
}

const mapDispatchToProps= (dispatch,ownProps)=>{
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostPage)