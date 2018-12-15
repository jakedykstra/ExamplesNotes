import React from "react";
// we need to import the component for VideoListItem to help fill out the videos
import VideoListItem from "./video_list_item";

//componenet doesnt have need for state. 
    //Just ask youself does it record human interaction? Does it re-render itself? Since it's no then just   use a simple functional component

// setting arrow function to VideoList
// note it is a component function so it runs right away
const VideoList = props => {
  // map iterates through props video data and for each iteration returns a VideoListItem with video data passed to it as a property called video
    // We created a key here to give each listed item a unique idenitfier. IMPORTATN: Without that we would have to throw away and make a new list for every update. React will send an error without one. 
    //We are taking the onVideoSelect prop from app and passing it down to video list. This allows video list item to have access
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
