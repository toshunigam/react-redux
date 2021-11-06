import React, { Component } from "react";
import { connect } from 'react-redux'
import {fetchUser} from '../actions'

class UserHeader extends Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    render(){
        // console.log(this.props.users)
        const {user} = this.props
        if(!user){
            return null
        }

        return(
            <div className="header">{user.name}</div>
        )
    }
}

const mapStateToProp = (state,ownProps)=>{
    return {user:state.users.find(user=> user.id===ownProps.userId)}
}

export default connect(mapStateToProp,{ fetchUser })(UserHeader)