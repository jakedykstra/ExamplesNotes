import React from "react";

// no state is needed here as nothing no values are changed
// video is passed in as a prop key, which is then extracted here for it's data. It is called when app's render occurs
const VideoDetail = ({ video }) => {
  //if video isnt provided then send back loading. This is hear because if not react will render before the videos are pulled from the api and passed in everywhere as props.
  if (!video) {
    return <div>Loading...</div>;
  }
  //inside the video data prop, look for id.videoId, this is what will be embedded into the url to pull the video
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

      // in here we create an iframe which point to this url will show a youtube video player inside our application
      // we also use snippet to relay the information
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
