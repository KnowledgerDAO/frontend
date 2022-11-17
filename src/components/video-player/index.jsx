import React from "react";
import ReactPlayer from "react-player/file";
import "node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

function VideoPlayer({ url, thumbnail }) {
    console.log({ url });
    return (
        // <video width="919" height={517} controls>
        //     <source src={url} type="video/mp4" />
        // </video>
        <Player
            playsInline
            poster={thumbnail}
            src={url}
            fluid={false}
            width={919}
            height={517}
        />
    );
}

export default VideoPlayer;
