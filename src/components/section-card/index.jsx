import React from "react";

function SectionCard(props) {
    return (
        <div className="rbt-single-widget widget_tag_cloud mt--40">
            <h3 className="title">Course Playlist</h3>
            <div className="inner mt--20">{props.children}</div>
        </div>
    );
}

export default SectionCard;
