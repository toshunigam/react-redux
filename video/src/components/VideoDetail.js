import React from "react";

const VideoDetail = ({ video })=>{
    return(
        <div className="">
            {video.snippet.title}
        </div>
    )
}

export default VideoDetail