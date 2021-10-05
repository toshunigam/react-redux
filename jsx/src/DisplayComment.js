import React from "react";

const DisplayComment = (props)=>{
    return(
        <div className="comment">
            <a className="avatar" href="/">
                <img src={props.image} alt="avatar" />
            </a>
            <div className="content">
                <a className="author" href="/">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
                <div className="actions">
                    <a href="/" className="reply">Reply</a>
                </div>
            </div>
        </div>
    )
}

export default DisplayComment;
