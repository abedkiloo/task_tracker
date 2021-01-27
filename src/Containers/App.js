import React , { Component } from "react"
// import "babel-polyfill"

import PostsPage from "./PostsPage"
import UsersPage from "./UsersPage"

export default class App extends Component{
    render(){
        return(
            //add screen inside the div
            <div>
                {/* <PostsPage/> */}
                <UsersPage/>
            </div> 
        )
    }
}