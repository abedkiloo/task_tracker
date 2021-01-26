import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import actions and selectors from the Store folder
import * as postActions from "../Store/Posts/actions"
import * as postSelectors from "../Store/Posts/selectors"

class PostPage extends Component{
     //when the component is mount, call the fetch post action
    componentDidMount(){
        this.props.postActions.fetchPosts()
    }


}