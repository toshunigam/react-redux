import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

class PostList extends Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers()
    }

    renderList(){
        return this.props.posts!==undefined?this.props.posts.map((post)=>{
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div>
                            <UserHeader userId={post.userId} />
                        </div>
                    </div>
                </div>
            );
        }):null
    }

    render(){
        // console.log(this.props.posts)
        return(
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProp = (state)=>{
    return {posts:state.posts}
}

export default connect(mapStateToProp,{ fetchPostsAndUsers })(PostList)