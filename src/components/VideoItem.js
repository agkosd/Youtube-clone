import React from "react";
import "./style.css";

const VideoItem = (props) => {
  return (
    <div
      onClick={() => props.onVideoSelect(props.video)}
      className="video-item item"
    >
      <img
        className="ui image"
        alt={props.video.snippet.title}
        src={props.video.snippet.thumbnails.high.url}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
