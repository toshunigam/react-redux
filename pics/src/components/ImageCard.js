import React from "react";

const ImageCard = (props) => {
    return(
        <div className="ui card">
            <a className="image" href="/">
                <img src={props.data.urls.regular} alt={props.data.alt_description} />
            </a>
            <div className="content">
                <a className="header" href="/">{props.data.description}</a>
                <div className="meta">
                    <a href="/">{props.data.created_at}</a>
                </div>
            </div>
        </div>
    )
}

export default ImageCard