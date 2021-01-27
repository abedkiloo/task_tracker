import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import actions and selectors from the Store folder
import * as userActions from "../Store/users/actions"
import * as userSelectors from "../Store/users/selectors"
import PropTypes from "prop-types";

//importing component
import UserItem from "../components/UserItem"

class UsersPage extends Component{
     //when the component is mount, call the fetch post action
    componentDidMount(){
        this.props.userActions.fetchUsers()
    }

    //get alert from the  
    showUser(user){
        alert(user.body)
    }
    render(){
        return(
            <div>
            <h1>Users</h1>
            <div>
                {this.props.users.map((user,i)=>{
                    return <UserItem key={i} user={user} />
                })}
            </div>
          </div>
            )
    }
}
UsersPage.protoTypes={
    fetchUserProcess: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    userActions: PropTypes.object.isRequired,
}
//get the users and the fetch status from the post selector
const mapStateToProps = (state) => {
    return{
        fetchUserProcess: userSelectors.fetchUserProccess(state),
        users: userSelectors.getUsers(state)
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
