import React , { Component } from "react"
// import "babel-polyfill"

import PostsPage from "./PostsPage"

export default class App extends Component{
    render(){
        return(
            //add screen inside the div
            <div>
                <PostsPage/>
            </div> 
        )
    }
}