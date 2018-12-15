import React from "react";
//the component is called by videoList
//VideoList sends props of video and the selected video(just being index 0 in array) 


// in general we shouldn't pass props two deep like we do here from App to video list to here

const VideoListItem = ({ video, onVideoSelect }) => {
  // instead of doing const video = prop.video && const onVideoSelect = props.onVideoSelect, we know the props get passed into the param so instead we simply decronstruct the object and get variables video and onVideoSelect. It takes the property called video from the object passed in and makes the var that as well
  // the {video, onVideoSelect} above is indentical to listing this: const video = props.video; const onVideoSelect =props.onVideoSelect. It takes the props object and says that it will have a property called video. Grab that property and declare a new variable called video. 
  // were using bootstrap here to clean up
  // find this snippet and how to access using console.log with video
  const imageUrl = video.snippet.thumbnails.default.url;
  // we will set this so that whenever a user clicks on the <li> using onClick event, we will call onVideoSelect(video)
  // The reason we pass it video is because we want to call this particular video that was selected's video
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
