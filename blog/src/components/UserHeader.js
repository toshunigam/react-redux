import React, { Component } from "react";
import { connect } from 'react-redux'
import {fetchUser} from '../actions'

class UserHeader extends Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    render(){
        console.log(this.props.user)
        return(
            <div>User Header{this.props.user.name}</div>
        )
    }
}

const mapStateToProp = (state)=>{
    return {user:state.user}
}

export default connect(mapStateToProp,{ fetchUser })(UserHeader)