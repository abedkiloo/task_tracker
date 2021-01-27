import React , { Component } from "react"

import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom'; 

import PostsPage from "./PostsPage"
import UsersPage from "./UsersPage"

export default class App extends Component{
    render(){
        return(
            
            <Router>
                <nav className="container">
                    <ul> 
                        <li> 
                            <Link to="/">Users</Link> 
                        </li> 
                        <li> 
                            <Link to="/posts">Posts</Link> 
                        </li> 
                    </ul> 
                </nav>
                <Switch> 
                    <Route exact path="/" component={UsersPage}/>
                    <Route exact path="/posts" component={PostsPage}/>
                </Switch> 
            </Router>
        )
    }
}