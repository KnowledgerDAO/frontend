import React from "react";

function VideoPlayer({ url }) {
    console.log({url})
    return (
        <video width="919" height={517} controls>
            <source src={url} type="video/mp4" />
        </video>
    );
}

export default VideoPlayer;
